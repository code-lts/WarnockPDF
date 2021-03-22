#!/bin/sh

set -ex

command -v pdfinfo > /dev/null
if [ $? -gt 0 ]; then
    echo "pdfinfo could not be found"
    exit 1
fi

EXAMPLE_FILES="$(find examples/ -type f -name 'example*.php' \
                -not -path '*/barcodes/*' \
                -not -wholename 'examples/example_006.php' \
                -not -wholename 'examples/example_008.php' \
                -not -wholename 'examples/example_032.php' \
                -not -wholename 'examples/example_039.php' \
                -not -wholename 'examples/example_058.php' \
                | sort -df)"
TEMP_FOLDER="$(mktemp -d /tmp/WarnockPDF-tests.XXXXXXXXX)"
OUTPUT_FILE="${TEMP_FOLDER}/output.pdf"
ROOT_DIR="$(php -r 'echo realpath(dirname(__FILE__));')"
TESTS_DIR="${ROOT_DIR}/tests/"

echo "Root folder: ${ROOT_DIR}"
echo "Temporary folder: ${TEMP_FOLDER}"

for file in $EXAMPLE_FILES; do
    echo "File: $file"
    php -l $file > /dev/null
    if [ $? -eq 0 ]; then
        echo "File-lint-passed: $file"
    fi
    php -d xdebug.coverage_enable=0 \
        -d xdebug.default_enable=0 \
        -d pcov.directory="${ROOT_DIR}" \
        -d auto_prepend_file="${TESTS_DIR}/coverage.php" \
        "$file" > "${OUTPUT_FILE}"
    if [ $? -eq 0 ]; then
        echo "File-run-passed: $file"
        if [ $(head -c 4 "${OUTPUT_FILE}") != "%PDF" ]; then
            echo "Generated-not-a-pdf: $file"
            echo "---------------------------"
            cat ${OUTPUT_FILE}
            echo "---------------------------"
            exit 1
        fi
        pdfinfo "${OUTPUT_FILE}" > /dev/null
        if [ $? -gt 0 ]; then
            echo "Generated-invalid-file: $file"
            exit 1
        fi
    else
        echo "File-run-failed: $file"
        exit 1
    fi
done

rm -rf "${TEMP_FOLDER}"