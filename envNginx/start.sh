#!/usr/bin/env bash

set -euo pipefail

{
    printf 'window.project = '
    jq -an 'env | with_entries(select(.key | startswith("VITE_APP_"))) | {env: .}'
    printf ';\n'
} > env.js

echo "Generated env.js"
cat env.js

mv env.js /usr/share/nginx/html

echo "Start nginx..."

exec nginx -g 'daemon off;'