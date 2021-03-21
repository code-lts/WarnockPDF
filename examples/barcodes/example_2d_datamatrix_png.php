<?php
//============================================================+
// Author      : Nicola Asuni - Tecnick.com LTD - www.tecnick.com - info@tecnick.com
// License     : GNU-LGPL v3 (http://www.gnu.org/copyleft/lesser.html)
// -------------------------------------------------------------------
// Copyright (C) 2009-2013 Nicola Asuni - Tecnick.com LTD
//
// This file is part of WarnockPDF software library.
//
// WarnockPDF is free software: you can redistribute it and/or modify it
// under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// WarnockPDF is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
// See the GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with WarnockPDF. If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE file for more information.
// -------------------------------------------------------------------
//
// Description : Example for tcpdf_barcodes_2d.php class
//
//============================================================+

/**
 * @file
 * Example for tcpdf_barcodes_2d.php class
 *
 * @author Nicola Asuni
 * @version 1.0.009
 */

// include 2D barcode class (search for installation path)
require_once(dirname(__FILE__).'/tcpdf_barcodes_2d_include.php');

// set the barcode content and type
$barcodeobj = new TCPDF2DBarcode('http://www.tcpdf.org', 'DATAMATRIX');

// output the barcode as PNG image
$barcodeobj->getBarcodePNG(6, 6, array(0,0,0));
