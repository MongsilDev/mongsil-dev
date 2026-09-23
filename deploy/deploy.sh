#!/usr/bin/env bash
# mongsil.dev 배포: 빌드 후 Mac mini의 정적 파일을 갱신한다.
#
# nginx 컨테이너가 ~/docker/mongsil-dev/out 을 볼륨으로 직접 읽으므로
# 파일만 갱신하면 즉시 반영된다 (컨테이너 재시작 불필요).
# 디렉토리를 mv/교체하면 바인드 마운트가 깨지므로 반드시 rsync로 "안에다" 동기화한다.

set -euo pipefail

HOST="macmini"

cd "$(dirname "$0")/.."

echo "==> 빌드"
pnpm build

echo "==> Mac mini 동기화 ($HOST:~/docker/mongsil-dev/out)"
# 뒤 슬래시 필수: out/ 내용만 동기화, 삭제는 전송 완료 뒤 --delete-after
# 옛 HTML이 사라진 청크를 참조하는 창을 없앤다
rsync -az --delete-after out/ "$HOST:docker/mongsil-dev/out/"

echo "==> 확인"
curl -s -o /dev/null -w '  http=%{http_code} type=%{content_type}\n' "https://mongsil.dev/?_=$RANDOM"

echo "배포 완료"
