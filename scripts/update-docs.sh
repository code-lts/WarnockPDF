#!/bin/sh
set -e

# Remove cache dir, do not upload it
# Use sudo because previous action was not ran as the same user
sudo rm -rf ./cache

TEMP_DIR="$(mktemp -d --suffix=_doctum-build-warnockpdf)"
cp -rp build "${TEMP_DIR}"
git checkout gh-pages
git ls-files ./api-docs/ | xargs -r -n 1 rm
rm -rfd ./api-docs/*
mv "${TEMP_DIR}"/build ./api-docs
rm -rf "${TEMP_DIR}"

# Force update the CNAME just in case
echo 'warnockpdf.long-term.support' > CNAME

# Push the changes, even if they are empty
git add -A
git commit --allow-empty -m "Api documentation update ($(date --utc))" -m "#apidocs"
git push
