#!/usr/bin/env bash
# Mac mini launchd 매일 실행, Steam 플레이 시간이 바뀐 날에만 재배포
# 작업 중인 변경이나 push 안 된 커밋이 있으면 그 상태가 공개되지 않게 건너뜀

set -euo pipefail

cd "$(dirname "$0")/.."
export PATH="/opt/homebrew/opt/node@24/bin:/opt/homebrew/bin:/usr/bin:/bin:$PATH"

date "+%F %T"
if [ -n "$(git status --porcelain)" ]; then
  echo "작업 중 변경이 있어 건너뜀"
  exit 0
fi
git fetch -q origin
if [ -n "$(git rev-list '@{u}..HEAD')" ]; then
  echo "push 안 된 커밋이 있어 건너뜀"
  exit 0
fi
git merge -q --ff-only '@{u}'

rc=0
node scripts/steam-sync.mjs --check || rc=$?
[ "$rc" -eq 10 ] || exit "$rc"
sh deploy/deploy.sh
