<?php

/**
 * Example 055 for WarnockPDF library
 *
 * @description Display all characters available on core fonts.
 * @author Nicola Asuni - Tecnick.com LTD <info@tecnick.com>
 * @license LGPL-3.0
 */

/**
 * Display all characters available on core fonts.
 *
 * @abstract WarnockPDF - Example: XHTML Forms
 * @author Nicola Asuni
 * @since 2009-10-21
 */

// Include the main TCPDF library (search for installation path).
require_once('tcpdf_include.php');

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Nicola Asuni');
$pdf->SetTitle('TCPDF Example 055');
$pdf->SetSubject('TCPDF Tutorial');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE . ' 055', PDF_HEADER_STRING);

// set header and footer fonts
$pdf->setHeaderFont(array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(true, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(__DIR__ . '/lang/eng.php')) {
    require_once(__DIR__ . '/lang/eng.php');
    $pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf->SetFont('helvetica', '', 14);

// array of font names
$core_fonts = array('courier', 'courierB', 'courierI', 'courierBI', 'helvetica', 'helveticaB', 'helveticaI', 'helveticaBI', 'times', 'timesB', 'timesI', 'timesBI', 'symbol', 'zapfdingbats');

// set fill color
$pdf->SetFillColor(221, 238, 255);

// create one HTML table for each core font
foreach($core_fonts as $font) {
    // add a page
    $pdf->AddPage();

    // Cell($w, $h=0, $txt='', $border=0, $ln=0, $align='', $fill=false, $link='', $stretch=0, $ignore_min_height=false, $calign='T', $valign='M')

    // set font for title
    $pdf->SetFont('helvetica', 'B', 16);

    // print font name
    $pdf->Cell(0, 10, 'FONT: ' . $font, 1, 1, 'C', true, '', 0, false, 'T', 'M');

    // set font for chars
    $pdf->SetFont($font, '', 16);

    // print each character
    for ($i = 0; $i < 256; ++$i) {
        if (($i > 0) and (($i % 16) == 0)) {
            $pdf->Ln();
        }
        $pdf->Cell(11.25, 11.25, TCPDF_FONTS::unichr($i), 1, 0, 'C', false, '', 0, false, 'T', 'M');
    }

    $pdf->Ln(20);

    // print a pangram
    $pdf->Cell(0, 0, 'The quick brown fox jumps over the lazy dog', 0, 1, 'C', false, '', 0, false, 'T', 'M');
}

// ---------------------------------------------------------

//Close and output PDF document
$pdf->Output('example_055.pdf', 'D');
