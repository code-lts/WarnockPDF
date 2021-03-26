<?php

/**
 * This file is part of the WarnockPDF library.
 *
 * @author Nicola Asuni - Tecnick.com LTD <info@tecnick.com>
 * @license LGPL-3.0
 * @copyright 2009-2013 Nicola Asuni - Tecnick.com LTD
 * @description Example for tcpdf_barcodes_2d.php class
 */

/**
 * @file
 * Example for tcpdf_barcodes_2d.php class
 *
 * @author Nicola Asuni
 * @version 1.0.009
 */

// include 2D barcode class (search for installation path)
require_once __DIR__ . '/tcpdf_barcodes_2d_include.php';

// set the barcode content and type
$barcodeobj = new TCPDF2DBarcode('http://www.tcpdf.org', 'QRCODE,H');

// output the barcode as SVG inline code
echo $barcodeobj->getBarcodeSVGcode(6, 6, 'black');
