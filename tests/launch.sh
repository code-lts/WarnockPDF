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
                | sort -df)"

EXAMPLE_BARCODE_FILES="$(find examples/barcodes -type f -name 'example*.php' \
                | sort -df)"

TEMP_FOLDER="$(mktemp -d /tmp/WarnockPDF-tests.XXXXXXXXX)"
OUTPUT_FILE="${TEMP_FOLDER}/output.pdf"
OUTPUT_FILE_ERROR="${TEMP_FOLDER}/errors.txt"
ROOT_DIR="$(php -r 'echo realpath(dirname(__FILE__));')"
TESTS_DIR="${ROOT_DIR}/tests/"

ENABLE_PCOV="-dextension=pcov.so"
if [ "$(php -r 'echo PHP_MAJOR_VERSION;')" = "5" ];then
    # pcov does not exist for PHP 5
    ENABLE_PCOV=""
fi

echo "Root folder: ${ROOT_DIR}"
echo "Temporary folder: ${TEMP_FOLDER}"

FAILED_FLAG=0

cd "${ROOT_DIR}/examples"

for file in $EXAMPLE_FILES; do
    echo "File: $file"
    php -l "${ROOT_DIR}/$file" > /dev/null
    if [ $? -eq 0 ]; then
        echo "File-lint-passed: $file"
    fi
    set +e
    php -n \
        -d date.timezone=UTC \
        -d extension=gd.so ${ENABLE_PCOV} \
        -d display_errors=on \
        -d error_reporting=-1 \
        -d pcov.directory="${ROOT_DIR}" \
        -d auto_prepend_file="${TESTS_DIR}/coverage.php" \
        "${ROOT_DIR}/$file" 1> "${OUTPUT_FILE}" 2> "${OUTPUT_FILE_ERROR}"
    if [ $? -eq 0 ]; then
        echo "File-run-passed: $file"
        ERROR_LOGS="$(cat "${OUTPUT_FILE_ERROR}")"
        if [ ! -z "${ERROR_LOGS}" ]; then
            FAILED_FLAG=1
            set -e
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
    set -e
done

for file in $EXAMPLE_BARCODE_FILES; do
    echo "File: $file"
    php -l "${ROOT_DIR}/$file" > /dev/null
    if [ $? -eq 0 ]; then
        echo "File-lint-passed: $file"
    fi
    set +e
    php -n \
        -d date.timezone=UTC \
        -d extension=bcmath.so ${ENABLE_PCOV} \
        -d display_errors=on \
        -d error_reporting=-1 \
        -d pcov.directory="${ROOT_DIR}" \
        -d auto_prepend_file="${TESTS_DIR}/coverage.php" \
        "${ROOT_DIR}/$file" 1> "${OUTPUT_FILE}" 2> "${OUTPUT_FILE_ERROR}"
    if [ $? -eq 0 ]; then
        echo "File-run-passed: $file"
        ERROR_LOGS="$(cat "${OUTPUT_FILE_ERROR}")"
        if [ ! -z "${ERROR_LOGS}" ]; then
            FAILED_FLAG=1
            set -e
            echo "Logs: $file"
            echo "---------------------------"
            echo "${ERROR_LOGS}"
            echo "---------------------------"
        fi
    else
        echo "File-run-failed: $file"
    fi
    set -e
done

cd - > /dev/null

rm -rf "${TEMP_FOLDER}"

exit "${FAILED_FLAG}"
