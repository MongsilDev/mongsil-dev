#!/usr/bin/env bash
# mongsil.dev 배포: 빌드 후 Mac mini의 정적 파일을 갱신한다.
#
# nginx 컨테이너가 ~/docker/mongsil-dev/out 을 볼륨으로 직접 읽으므로
# 파일만 갱신하면 즉시 반영된다 (컨테이너 재시작 불필요).
# 디렉토리를 mv/교체하면 바인드 마운트가 옛 디렉토리를 계속 가리키므로 반드시 rsync로 "안에다" 동기화한다.

set -euo pipefail

HOST="macmini"

cd "$(dirname "$0")/.."
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"

echo "==> 빌드"
pnpm build

echo "==> Mac mini 동기화 ($HOST:~/docker/mongsil-dev/out)"
# 뒤 슬래시 필수: out/ 내용만 동기화, 삭제는 전송 완료 뒤 --delete-after
# 옛 HTML이 삭제된 청크를 참조하는 시간을 없앤다
rsync -az --delete-after out/ "$HOST:docker/mongsil-dev/out/"

# Cloudflare가 HTML까지 거점에 하루 캐시하므로 배포 뒤 비우고 다시 채운다.
# 토큰은 bori.wiki 퍼지에 쓰는 계정 토큰을 서버의 비밀 파일에서 읽는다
echo "==> Cloudflare 캐시 비우기"
ZONE="d439e5edb4aa419a297d331c734eb29a"
TOKEN_FILE="${CF_PURGE_TOKEN_FILE:-$HOME/docker/mediawiki/LocalSettings.secrets.php}"
token="$(grep -oE 'cfat_[A-Za-z0-9]+' "$TOKEN_FILE" 2>/dev/null | head -1 || true)"
if [ -z "$token" ]; then
  echo "  토큰이 없어 건너뜀. 대시보드에서 mongsil.dev 캐시를 비워 주세요"
elif curl -s -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" \
    "https://api.cloudflare.com/client/v4/zones/$ZONE/purge_cache" -d '{"hosts":["mongsil.dev"]}' | grep -q '"success":true'; then
  echo "  비움. 거점 캐시를 다시 채움"
  # 비우기가 전파되는 데 몇 초 걸리고, 한 거점에도 서버가 여러 대라 간격을 두고 여러 번 요청해 둔다
  sleep 5
  for _ in 1 2 3 4 5 6 7 8; do
    curl -s -o /dev/null "https://mongsil.dev/"
    sleep 1
  done
else
  echo "  캐시 비우기 실패. 대시보드에서 비워 주세요"
fi

echo "==> 확인"
curl -s -o /dev/null -w '  http=%{http_code} type=%{content_type} ttfb=%{time_starttransfer}s\n' "https://mongsil.dev/"

echo "배포 완료"
