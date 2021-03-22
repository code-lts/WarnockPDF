<?php
/**
 * This file is part of the WarnockPDF library.
 *
 * @author Nicola Asuni - Tecnick.com LTD <info@tecnick.com>
 * @license LGPL-3.0
 * @copyright 2011-2013 Nicola Asuni - Tecnick.com LTD
 * @description This is a PHP class extension of the WarnockPDF library to import existing PDF documents.
 */

/**
 * @file
 * !!! THIS CLASS IS UNDER DEVELOPMENT !!!
 * This is a PHP class extension of the WarnockPDF library to import existing PDF documents.<br>
 *
 * @author Nicola Asuni
 * @version 1.0.001
 */

// include the main class
require_once(dirname(__FILE__).'/tcpdf.php');
// include PDF parser class
require_once(dirname(__FILE__).'/tcpdf_parser.php');

/**
 *
 * !!! THIS CLASS IS UNDER DEVELOPMENT !!!
 * PHP class extension of the WarnockPDF library to import existing PDF documents.<br>
 *
 * @brief PHP class extension of the WarnockPDF library to import existing PDF documents.
 * @version 1.0.001
 * @author Nicola Asuni - info@tecnick.com
 */
class TCPDF_IMPORT extends TCPDF {

	/**
	 * Import an existing PDF document
	 * @param $filename (string) Filename of the PDF document to import.
	 * @return true in case of success, false otherwise
	 * @public
	 * @since 1.0.000 (2011-05-24)
	 */
	public function importPDF($filename) {
		// load document
		$rawdata = file_get_contents($filename);
		if ($rawdata === false) {
			$this->Error('Unable to get the content of the file: '.$filename);
		}
		// configuration parameters for parser
		$cfg = array(
			'die_for_errors' => false,
			'ignore_filter_decoding_errors' => true,
			'ignore_missing_filter_decoders' => true,
		);
		try {
			// parse PDF data
			$pdf = new TCPDF_PARSER($rawdata, $cfg);
		} catch (Exception $e) {
			die($e->getMessage());
		}
		// get the parsed data
		$data = $pdf->getParsedData();
		// release some memory
		unset($rawdata);

		// ...


		print_r($data); // DEBUG


		unset($pdf);
	}

} // END OF CLASS
