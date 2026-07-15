#!/usr/bin/env bash
# mongsil.dev 배포: 빌드 후 NAS의 정적 파일을 갱신한다.
#
# nginx 컨테이너가 /volume1/docker/mongsil-dev/out 를 볼륨으로 직접 읽으므로
# 파일만 갱신하면 즉시 반영된다 (컨테이너 재시작 불필요).
# 디렉토리를 mv/교체하면 바인드 마운트가 깨지므로 반드시 rsync로 "안에다" 동기화한다.

set -euo pipefail

HOST="MongsilDev"
REMOTE="/volume1/docker/mongsil-dev"

cd "$(dirname "$0")/.."

echo "==> 빌드"
pnpm build

echo "==> NAS 동기화 ($HOST:$REMOTE/out)"
# 뒤의 슬래시 중요: out/ -> out/ 은 내용만 동기화 (--delete 로 삭제분도 반영)
rsync -az --delete out/ "$HOST:$REMOTE/out/"

echo "==> nginx 설정 동기화"
rsync -az deploy/nginx.conf "$HOST:$REMOTE/nginx.conf"

echo "==> 확인"
ssh "$HOST" "curl -s -o /dev/null -w '  http=%{http_code} type=%{content_type}\n' http://127.0.0.1:8083/"

echo "배포 완료"
