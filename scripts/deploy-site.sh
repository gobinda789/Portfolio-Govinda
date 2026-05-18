#!/usr/bin/env bash
set -euo pipefail

DOMAIN="${1:-govindabhandari7.com.np}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

echo "Deploying portfolio to https://${DOMAIN}"

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

mkdir -p public
printf "%s\n" "$DOMAIN" > public/CNAME

echo "Building site..."
npm run build

echo "Publishing dist/ to GitHub Pages..."
npm run deploy:gh-pages

echo
echo "Published."
echo "Site: https://${DOMAIN}"
echo
echo "If the browser still shows an old page, wait a few minutes and hard refresh."
