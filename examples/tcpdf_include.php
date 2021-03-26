<?php

/**
 * This file is part of the WarnockPDF library.
 *
 * @author Nicola Asuni - Tecnick.com LTD <info@tecnick.com>
 * @license LGPL-3.0
 * @copyright Nicola Asuni - Tecnick.com LTD
 * @description Search and include the TCPDF library.
 */

/**
 * Search and include the TCPDF library.
 *
 * @abstract TCPDF - Include the main class.
 * @author Nicola Asuni
 * @since 2013-05-14
 */

// always load alternative config file for examples
require_once('config/tcpdf_config_alt.php');

// Include the main TCPDF library (search the library on the following directories).
$tcpdf_include_dirs = array(
    realpath('../tcpdf.php'),
    realpath(dirname(__FILE__) . '/../tcpdf.php'),
    '/usr/share/php/tcpdf/tcpdf.php',
    '/usr/share/tcpdf/tcpdf.php',
    '/usr/share/php-tcpdf/tcpdf.php',
    '/var/www/tcpdf/tcpdf.php',
    '/var/www/html/tcpdf/tcpdf.php',
    '/usr/local/apache2/htdocs/tcpdf/tcpdf.php'
);
foreach ($tcpdf_include_dirs as $tcpdf_include_path) {
    if (@file_exists($tcpdf_include_path)) {
        require_once($tcpdf_include_path);
        break;
    }
}
