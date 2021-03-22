#!/bin/sh

set -e

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
OUTPUT_FILE_ERROR="${TEMP_FOLDER}/errors.txt"
ROOT_DIR="$(php -r 'echo realpath(dirname(__FILE__));')"
TESTS_DIR="${ROOT_DIR}/tests/"

echo "Root folder: ${ROOT_DIR}"
echo "Temporary folder: ${TEMP_FOLDER}"

FAILED_FLAG=0

for file in $EXAMPLE_FILES; do
    echo "File: $file"
    php -l $file > /dev/null
    if [ $? -eq 0 ]; then
        echo "File-lint-passed: $file"
    fi
    php -d display_errors=on \
        -d error_reporting=-1 \
        -d pcov.directory="${ROOT_DIR}" \
        -d auto_prepend_file="${TESTS_DIR}/coverage.php" \
        "$file" 1> "${OUTPUT_FILE}" 2> "${OUTPUT_FILE_ERROR}"
    if [ $? -eq 0 ]; then
        echo "File-run-passed: $file"
        ERROR_LOGS="$(cat "${OUTPUT_FILE_ERROR}")"
        if [ ! -z "${ERROR_LOGS}" ]; then
            FAILED_FLAG=1
            echo "Logs: $file"
            echo "---------------------------"
            echo "${ERROR_LOGS}"
            echo "---------------------------"
        fi
        if [ $(head -c 4 "${OUTPUT_FILE}") != "%PDF" ]; then
            FAILED_FLAG=1
            echo "Generated-not-a-pdf: $file"
            echo "---------------------------"
            cat "${OUTPUT_FILE}"
            echo "---------------------------"
            continue
        fi
        pdfinfo "${OUTPUT_FILE}" > /dev/null
        if [ $? -gt 0 ]; then
            FAILED_FLAG=1
            echo "Generated-invalid-file: $file"
        fi
    else
        echo "File-run-failed: $file"
    fi
done

rm -rf "${TEMP_FOLDER}"

exit "${FAILED_FLAG}"
