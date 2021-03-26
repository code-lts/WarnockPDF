<?php

/**
 * This file is part of the WarnockPDF library.
 *
 * @author Nicola Asuni - Tecnick.com LTD <info@tecnick.com>
 * @license LGPL-3.0
 * @copyright Nicola Asuni - Tecnick.com LTD
 * @description Search and include the TCPDF Barcode 1D class.
 */

/**
 * Search and include the TCPDF Barcode 1D class.
 *
 * @abstract TCPDF - Include the main class.
 * @author Nicola Asuni
 * @since 2013-05-19
 */

// Include the TCPDF 1D barcode class (search the class on the following directories).
$tcpdf_barcodes_1d_include_dirs = array(
    realpath('../../tcpdf_barcodes_1d.php'),
    realpath(__DIR__ . '/../../tcpdf_barcodes_1d.php'),
    '/usr/share/php/tcpdf/tcpdf_barcodes_1d.php',
    '/usr/share/tcpdf/tcpdf_barcodes_1d.php',
    '/usr/share/php-tcpdf/tcpdf_barcodes_1d.php',
    '/var/www/tcpdf/tcpdf_barcodes_1d.php',
    '/var/www/html/tcpdf/tcpdf_barcodes_1d.php',
    '/usr/local/apache2/htdocs/tcpdf/tcpdf_barcodes_1d.php');
foreach ($tcpdf_barcodes_1d_include_dirs as $tcpdf_barcodes_1d_include_path) {
    if (@file_exists($tcpdf_barcodes_1d_include_path)) {
        require_once($tcpdf_barcodes_1d_include_path);
        break;
    }
}
