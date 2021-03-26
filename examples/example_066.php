<?php

/**
 * Example 066 for WarnockPDF library
 *
 * @description Creates an example PDF/A-1b document using WarnockPDF
 * @author Nicola Asuni - Tecnick.com LTD <info@tecnick.com>
 * @license LGPL-3.0
 */

/**
 * Creates an example PDF/A-1b document using WarnockPDF
 *
 * @abstract WarnockPDF - Example: PDF/A-1b mode
 * @author Nicola Asuni
 * @since 2021-03-26
 */

// Load the autoloader, move one folder back from examples
require_once __DIR__ . '/../vendor/autoload.php';

use WarnockPDF\WarnockPDF;

// create new PDF document
$pdf = new WarnockPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false, true);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Nicola Asuni');
$pdf->SetTitle('WarnockPDF Example 066');
$pdf->SetSubject('WarnockPDF Tutorial');
$pdf->SetKeywords('WarnockPDF, PDF, example, test, guide');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE . ' 065', PDF_HEADER_STRING);

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
    require_once __DIR__ . '/lang/eng.php';

    $pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set default font subsetting mode
$pdf->setFontSubsetting(true);

// Set font
$pdf->SetFont('helvetica', '', 14, '', true);

// Add a page
// This method has several options, check the source code documentation for more information.
$pdf->AddPage();

// Set some content to print
$html = <<<HTML
<h1>Example of <a href="https://warnockpdf.long-term.support/">Warnockpdf</a> document in <span style="background-color:#99ccff;color:black;"> PDF/A-1b </span> mode.</h1>
<i>This document conforms to the standard <b>PDF/A-1b (ISO 19005-1:2005)</b>.</i>
<p>Please check the source code documentation and other examples for further information (<a href="https://warnockpdf.long-term.support">https://warnockpdf.long-term.support</a>).</p>
HTML;

// Print text using writeHTMLCell()
$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);

// ---------------------------------------------------------

// Close and output PDF document
// This method has several options, check the source code documentation for more information.
$pdf->Output('example_066.pdf', 'I');
