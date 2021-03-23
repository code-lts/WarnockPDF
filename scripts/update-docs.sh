#!/bin/sh
set -e

TEMP_DIR="$(mktemp -d --suffix=_doctum-build-warnockpdf)"
cp -rp build "${TEMP_DIR}"
git checkout gh-pages
git ls-files ./api-docs/ | xargs -r -n 1 rm
rm -rfd ./api-docs/*
mv "${TEMP_DIR}"/build/* ./
rm -rf "${TEMP_DIR}"
echo 'warnockpdf.long-term.support' > CNAME
git add -A
git commit --allow-empty -m "Api documentation update ($(date --utc))" -m "#apidocs"
git push
