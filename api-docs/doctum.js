

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href=".html">[Global Namespace]</a></div><div class="bd"><ul><li data-name="class:Datamatrix" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Datamatrix.html">Datamatrix</a></div></li><li data-name="class:PDF417" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="PDF417.html">PDF417</a></div></li><li data-name="class:QRcode" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="QRcode.html">QRcode</a></div></li><li data-name="class:TCPDF" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF.html">TCPDF</a></div></li><li data-name="class:TCPDF2DBarcode" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF2DBarcode.html">TCPDF2DBarcode</a></div></li><li data-name="class:TCPDFBarcode" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDFBarcode.html">TCPDFBarcode</a></div></li><li data-name="class:TCPDF_COLORS" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_COLORS.html">TCPDF_COLORS</a></div></li><li data-name="class:TCPDF_FONT_DATA" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_FONT_DATA.html">TCPDF_FONT_DATA</a></div></li><li data-name="class:TCPDF_IMAGES" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_IMAGES.html">TCPDF_IMAGES</a></div></li><li data-name="class:TCPDF_STATIC" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_STATIC.html">TCPDF_STATIC</a></div></li></ul></div></li></ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                        {"type":"Namespace","link":".html","name":"","doc":"Namespace "},                            {"type":"Class","link":"Datamatrix.html","name":"Datamatrix","doc":"Class to create DataMatrix ECC 200 barcode arrays for TCPDF class."},
                                {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method___construct","name":"Datamatrix::__construct","doc":"This is the class constructor."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_getBarcodeArray","name":"Datamatrix::getBarcodeArray","doc":"Returns a barcode array which is readable by TCPDF"},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_getGFProduct","name":"Datamatrix::getGFProduct","doc":"Product of two numbers in a Power-of-Two Galois Field"},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_getErrorCorrection","name":"Datamatrix::getErrorCorrection","doc":"Add error correction codewords to data codewords array (ANNEX E)."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_get253StateCodeword","name":"Datamatrix::get253StateCodeword","doc":"Return the 253-state codeword"},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_get255StateCodeword","name":"Datamatrix::get255StateCodeword","doc":"Return the 255-state codeword"},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_isCharMode","name":"Datamatrix::isCharMode","doc":"Returns true if the char belongs to the selected mode"},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_lookAheadTest","name":"Datamatrix::lookAheadTest","doc":"The look-ahead test scans the data to be encoded to find the best mode (Annex P - steps from J to S)."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_getSwitchEncodingCodeword","name":"Datamatrix::getSwitchEncodingCodeword","doc":"Get the switching codeword to a new encoding mode (latch codeword)"},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_getMaxDataCodewords","name":"Datamatrix::getMaxDataCodewords","doc":"Choose the minimum matrix size and return the max number of data codewords."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_getHighLevelEncoding","name":"Datamatrix::getHighLevelEncoding","doc":"Get high level encoding using the minimum symbol data characters for ECC 200"},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_placeModule","name":"Datamatrix::placeModule","doc":"Places \"chr+bit\" with appropriate wrapping within array[]."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_placeUtah","name":"Datamatrix::placeUtah","doc":"Places the 8 bits of a utah-shaped symbol character."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_placeCornerA","name":"Datamatrix::placeCornerA","doc":"Places the 8 bits of the first special corner case."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_placeCornerB","name":"Datamatrix::placeCornerB","doc":"Places the 8 bits of the second special corner case."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_placeCornerC","name":"Datamatrix::placeCornerC","doc":"Places the 8 bits of the third special corner case."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_placeCornerD","name":"Datamatrix::placeCornerD","doc":"Places the 8 bits of the fourth special corner case."},
        {"type":"Method","fromName":"Datamatrix","fromLink":"Datamatrix.html","link":"Datamatrix.html#method_getPlacementMap","name":"Datamatrix::getPlacementMap","doc":"Build a placement map."},
            
                    {"type":"Class","link":"PDF417.html","name":"PDF417","doc":"Class to create PDF417 barcode arrays for WarnockPDF class."},
                                {"type":"Method","fromName":"PDF417","fromLink":"PDF417.html","link":"PDF417.html#method___construct","name":"PDF417::__construct","doc":"This is the class constructor."},
        {"type":"Method","fromName":"PDF417","fromLink":"PDF417.html","link":"PDF417.html#method_getBarcodeArray","name":"PDF417::getBarcodeArray","doc":"Returns a barcode array which is readable by WarnockPDF"},
        {"type":"Method","fromName":"PDF417","fromLink":"PDF417.html","link":"PDF417.html#method_getErrorCorrectionLevel","name":"PDF417::getErrorCorrectionLevel","doc":"Returns the error correction level (0-8) to be used"},
        {"type":"Method","fromName":"PDF417","fromLink":"PDF417.html","link":"PDF417.html#method_getErrorCorrection","name":"PDF417::getErrorCorrection","doc":"Returns the error correction codewords"},
        {"type":"Method","fromName":"PDF417","fromLink":"PDF417.html","link":"PDF417.html#method_getInputSequences","name":"PDF417::getInputSequences","doc":"Create array of sequences from input"},
        {"type":"Method","fromName":"PDF417","fromLink":"PDF417.html","link":"PDF417.html#method_getCompaction","name":"PDF417::getCompaction","doc":"Compact data by mode."},
            
                    {"type":"Class","link":"QRcode.html","name":"QRcode","doc":"Class to create QR-code arrays for WarnockPDF class."},
                                {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method___construct","name":"QRcode::__construct","doc":"This is the class constructor."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getBarcodeArray","name":"QRcode::getBarcodeArray","doc":"Returns a barcode array which is readable by WarnockPDF"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_binarize","name":"QRcode::binarize","doc":"Convert the frame in binary form"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encodeString","name":"QRcode::encodeString","doc":"Encode the input string to QR code"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encodeMask","name":"QRcode::encodeMask","doc":"Encode mask"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_setFrameAt","name":"QRcode::setFrameAt","doc":"Set frame value at specified position"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getFrameAt","name":"QRcode::getFrameAt","doc":"Get frame value at specified position"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getNextPosition","name":"QRcode::getNextPosition","doc":"Return the next frame position"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_init","name":"QRcode::init","doc":"Initialize code."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getCode","name":"QRcode::getCode","doc":"Return Reed-Solomon block code."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_writeFormatInformation","name":"QRcode::writeFormatInformation","doc":"Write Format Information on frame and returns the number of black bits"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask0","name":"QRcode::mask0","doc":"mask0"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask1","name":"QRcode::mask1","doc":"mask1"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask2","name":"QRcode::mask2","doc":"mask2"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask3","name":"QRcode::mask3","doc":"mask3"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask4","name":"QRcode::mask4","doc":"mask4"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask5","name":"QRcode::mask5","doc":"mask5"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask6","name":"QRcode::mask6","doc":"mask6"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask7","name":"QRcode::mask7","doc":"mask7"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_generateMaskNo","name":"QRcode::generateMaskNo","doc":"Return bitmask"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_makeMaskNo","name":"QRcode::makeMaskNo","doc":"makeMaskNo"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_makeMask","name":"QRcode::makeMask","doc":"makeMask"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_calcN1N3","name":"QRcode::calcN1N3","doc":"calcN1N3"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_evaluateSymbol","name":"QRcode::evaluateSymbol","doc":"evaluateSymbol"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mask","name":"QRcode::mask","doc":"mask"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_isdigitat","name":"QRcode::isdigitat","doc":"Return true if the character at specified position is a number"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_isalnumat","name":"QRcode::isalnumat","doc":"Return true if the character at specified position is an alphanumeric character"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_identifyMode","name":"QRcode::identifyMode","doc":"identifyMode"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_eatNum","name":"QRcode::eatNum","doc":"eatNum"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_eatAn","name":"QRcode::eatAn","doc":"eatAn"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_eatKanji","name":"QRcode::eatKanji","doc":"eatKanji"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_eat8","name":"QRcode::eat8","doc":"eat8"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_splitString","name":"QRcode::splitString","doc":"splitString"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_toUpper","name":"QRcode::toUpper","doc":"toUpper"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_newInputItem","name":"QRcode::newInputItem","doc":"newInputItem"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encodeModeNum","name":"QRcode::encodeModeNum","doc":"encodeModeNum"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encodeModeAn","name":"QRcode::encodeModeAn","doc":"encodeModeAn"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encodeMode8","name":"QRcode::encodeMode8","doc":"encodeMode8"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encodeModeKanji","name":"QRcode::encodeModeKanji","doc":"encodeModeKanji"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encodeModeStructure","name":"QRcode::encodeModeStructure","doc":"encodeModeStructure"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encodeBitStream","name":"QRcode::encodeBitStream","doc":"encodeBitStream"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_appendNewInputItem","name":"QRcode::appendNewInputItem","doc":"Append data to an input object."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_insertStructuredAppendHeader","name":"QRcode::insertStructuredAppendHeader","doc":"insertStructuredAppendHeader"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_calcParity","name":"QRcode::calcParity","doc":"calcParity"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_checkModeNum","name":"QRcode::checkModeNum","doc":"checkModeNum"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_lookAnTable","name":"QRcode::lookAnTable","doc":"Look up the alphabet-numeric convesion table (see JIS X0510:2004, pp.19)."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_checkModeAn","name":"QRcode::checkModeAn","doc":"checkModeAn"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_estimateBitsModeNum","name":"QRcode::estimateBitsModeNum","doc":"estimateBitsModeNum"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_estimateBitsModeAn","name":"QRcode::estimateBitsModeAn","doc":"estimateBitsModeAn"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_estimateBitsMode8","name":"QRcode::estimateBitsMode8","doc":"estimateBitsMode8"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_estimateBitsModeKanji","name":"QRcode::estimateBitsModeKanji","doc":"estimateBitsModeKanji"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_checkModeKanji","name":"QRcode::checkModeKanji","doc":"checkModeKanji"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_check","name":"QRcode::check","doc":"Validate the input data."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_estimateBitStreamSize","name":"QRcode::estimateBitStreamSize","doc":"estimateBitStreamSize"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_estimateVersion","name":"QRcode::estimateVersion","doc":"estimateVersion"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_lengthOfCode","name":"QRcode::lengthOfCode","doc":"lengthOfCode"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_createBitStream","name":"QRcode::createBitStream","doc":"createBitStream"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_convertData","name":"QRcode::convertData","doc":"convertData"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_appendPaddingBit","name":"QRcode::appendPaddingBit","doc":"Append Padding Bit to bitstream"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_mergeBitStream","name":"QRcode::mergeBitStream","doc":"mergeBitStream"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getBitStream","name":"QRcode::getBitStream","doc":"Returns a stream of bits."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getByteStream","name":"QRcode::getByteStream","doc":"Pack all bit streams padding bits into a byte array."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_allocate","name":"QRcode::allocate","doc":"Return an array with zeros"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_newFromNum","name":"QRcode::newFromNum","doc":"Return new bitstream from number"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_newFromBytes","name":"QRcode::newFromBytes","doc":"Return new bitstream from bytes"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_appendBitstream","name":"QRcode::appendBitstream","doc":"Append one bitstream to another"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_appendNum","name":"QRcode::appendNum","doc":"Append one bitstream created from number to another"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_appendBytes","name":"QRcode::appendBytes","doc":"Append one bitstream created from bytes to another"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_bitstreamToByte","name":"QRcode::bitstreamToByte","doc":"Convert bitstream to bytes"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_qrstrset","name":"QRcode::qrstrset","doc":"Replace a value on the array at the specified position"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getDataLength","name":"QRcode::getDataLength","doc":"Return maximum data code length (bytes) for the version."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getECCLength","name":"QRcode::getECCLength","doc":"Return maximum error correction code length (bytes) for the version."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getWidth","name":"QRcode::getWidth","doc":"Return the width of the symbol for the version."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getRemainder","name":"QRcode::getRemainder","doc":"Return the numer of remainder bits."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getMinimumVersion","name":"QRcode::getMinimumVersion","doc":"Return a version number that satisfies the input code length."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_lengthIndicator","name":"QRcode::lengthIndicator","doc":"Return the size of length indicator for the mode and version."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_maximumWords","name":"QRcode::maximumWords","doc":"Return the maximum length for the mode and version."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getEccSpec","name":"QRcode::getEccSpec","doc":"Return an array of ECC specification."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_putAlignmentMarker","name":"QRcode::putAlignmentMarker","doc":"Put an alignment marker."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_putAlignmentPattern","name":"QRcode::putAlignmentPattern","doc":"Put an alignment pattern."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getVersionPattern","name":"QRcode::getVersionPattern","doc":"Return BCH encoded version information pattern that is used for the symbol of version 7 or greater. Use lower 18 bits."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_getFormatInfo","name":"QRcode::getFormatInfo","doc":"Return BCH encoded format information pattern."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_putFinderPattern","name":"QRcode::putFinderPattern","doc":"Put a finder pattern."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_createFrame","name":"QRcode::createFrame","doc":"Return a copy of initialized frame."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_newFrame","name":"QRcode::newFrame","doc":"Set new frame for the specified version."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsBlockNum","name":"QRcode::rsBlockNum","doc":"Return block number 0"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsBlockNum1","name":"QRcode::rsBlockNum1","doc":"Return block number 1"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsDataCodes1","name":"QRcode::rsDataCodes1","doc":"Return data codes 1"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsEccCodes1","name":"QRcode::rsEccCodes1","doc":"Return ecc codes 1"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsBlockNum2","name":"QRcode::rsBlockNum2","doc":"Return block number 2"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsDataCodes2","name":"QRcode::rsDataCodes2","doc":"Return data codes 2"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsEccCodes2","name":"QRcode::rsEccCodes2","doc":"Return ecc codes 2"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsDataLength","name":"QRcode::rsDataLength","doc":"Return data length"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_rsEccLength","name":"QRcode::rsEccLength","doc":"Return ecc length"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_init_rs","name":"QRcode::init_rs","doc":"Initialize a Reed-Solomon codec and add it to existing rsitems"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_modnn","name":"QRcode::modnn","doc":"modnn"},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_init_rs_char","name":"QRcode::init_rs_char","doc":"Initialize a Reed-Solomon codec and returns an array of values."},
        {"type":"Method","fromName":"QRcode","fromLink":"QRcode.html","link":"QRcode.html#method_encode_rs_char","name":"QRcode::encode_rs_char","doc":"Encode a Reed-Solomon codec and returns the parity array"},
            
                    {"type":"Class","link":"TCPDF.html","name":"TCPDF","doc":"PHP class for generating PDF documents without requiring external extensions."},
                                {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method___construct","name":"TCPDF::__construct","doc":"This is the class constructor."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method___destruct","name":"TCPDF::__destruct","doc":"Default destructor."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageUnit","name":"TCPDF::setPageUnit","doc":"Set the units of measure for the document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageFormat","name":"TCPDF::setPageFormat","doc":"Change the format of the current page"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageOrientation","name":"TCPDF::setPageOrientation","doc":"Set page orientation."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSpacesRE","name":"TCPDF::setSpacesRE","doc":"Set regular expression to detect withespaces or word separators."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setRTL","name":"TCPDF::setRTL","doc":"Enable or disable Right-To-Left language mode"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getRTL","name":"TCPDF::getRTL","doc":"Return the RTL status"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTempRTL","name":"TCPDF::setTempRTL","doc":"Force temporary RTL language direction"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_isRTLTextDir","name":"TCPDF::isRTLTextDir","doc":"Return the current temporary RTL status"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setLastH","name":"TCPDF::setLastH","doc":"Set the last cell height."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellHeight","name":"TCPDF::getCellHeight","doc":"Return the cell height"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_resetLastH","name":"TCPDF::resetLastH","doc":"Reset the last cell height."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getLastH","name":"TCPDF::getLastH","doc":"Get the last cell height."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setImageScale","name":"TCPDF::setImageScale","doc":"Set the adjusting factor to convert pixels to user units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getImageScale","name":"TCPDF::getImageScale","doc":"Returns the adjusting factor to convert pixels to user units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageDimensions","name":"TCPDF::getPageDimensions","doc":"Returns an array of page dimensions:</p>\n\n<ul><li>$this->pagedim[$this->page]['w'] = page width in points</li><li>$this->pagedim[$this->page]['h'] = height in points</li><li>$this->pagedim[$this->page]['wk'] = page width in user units</li><li>$this->pagedim[$this->page]['hk'] = page height in user units</li><li>$this->pagedim[$this->page]['tm'] = top margin</li><li>$this->pagedim[$this->page]['bm'] = bottom margin</li><li>$this->pagedim[$this->page]['lm'] = left margin</li><li>$this->pagedim[$this->page]['rm'] = right margin</li><li>$this->pagedim[$this->page]['pb'] = auto page break</li><li>$this->pagedim[$this->page]['or'] = page orientation</li><li>$this->pagedim[$this->page]['olm'] = original left margin</li><li>$this->pagedim[$this->page]['orm'] = original right margin</li><li>$this->pagedim[$this->page]['Rotate'] = The number of degrees by which the page shall be rotated clockwise when displayed or printed. The value shall be a multiple of 90.</li><li>$this->pagedim[$this->page]['PZ'] = The page's preferred zoom (magnification) factor.</li><li>$this->pagedim[$this->page]['trans'] : the style and duration of the visual transition to use when moving from another page to the given page during a presentation<ul><li>$this->pagedim[$this->page]['trans']['Dur'] = The page's display duration (also called its advance timing): the maximum length of time, in seconds, that the page shall be displayed during presentations before the viewer application shall automatically advance to the next page.</li><li>$this->pagedim[$this->page]['trans']['S'] = transition style : Split, Blinds, Box, Wipe, Dissolve, Glitter, R, Fly, Push, Cover, Uncover, Fade</li><li>$this->pagedim[$this->page]['trans']['D'] = The duration of the transition effect, in seconds.</li><li>$this->pagedim[$this->page]['trans']['Dm'] = (Split and Blinds transition styles only) The dimension in which the specified transition effect shall occur: H = Horizontal, V = Vertical. Default value: H.</li><li>$this->pagedim[$this->page]['trans']['M'] = (Split, Box and Fly transition styles only) The direction of motion for the specified transition effect: I = Inward from the edges of the page, O = Outward from the center of the pageDefault value: I.</li><li>$this->pagedim[$this->page]['trans']['Di'] = (Wipe, Glitter, Fly, Cover, Uncover and Push transition styles only) The direction in which the specified transition effect shall moves, expressed in degrees counterclockwise starting from a left-to-right direction. If the value is a number, it shall be one of: 0 = Left to right, 90 = Bottom to top (Wipe only), 180 = Right to left (Wipe only), 270 = Top to bottom, 315 = Top-left to bottom-right (Glitter only). If the value is a name, it shall be None, which is relevant only for the Fly transition when the value of SS is not 1.0. Default value: 0.</li><li>$this->pagedim[$this->page]['trans']['SS'] = (Fly transition style only) The starting or ending scale at which the changes shall be drawn. If M specifies an inward transition, the scale of the changes drawn shall progress from SS to 1.0 over the course of the transition. If M specifies an outward transition, the scale of the changes drawn shall progress from 1.0 to SS over the course of the transition. Default: 1.0. </li><li>$this->pagedim[$this->page]['trans']['B'] = (Fly transition style only) If true, the area that shall be flown in is rectangular and opaque. Default: false.</li></ul></li><li>$this->pagedim[$this->page]['MediaBox'] : the boundaries of the physical medium on which the page shall be displayed or printed<ul><li>$this->pagedim[$this->page]['MediaBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['MediaBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['MediaBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['MediaBox']['ury'] = upper-right y coordinate in points</li></ul></li><li>$this->pagedim[$this->page]['CropBox'] : the visible region of default user space<ul><li>$this->pagedim[$this->page]['CropBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['CropBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['CropBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['CropBox']['ury'] = upper-right y coordinate in points</li></ul></li><li>$this->pagedim[$this->page]['BleedBox'] : the region to which the contents of the page shall be clipped when output in a production environment<ul><li>$this->pagedim[$this->page]['BleedBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['BleedBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['BleedBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['BleedBox']['ury'] = upper-right y coordinate in points</li></ul></li><li>$this->pagedim[$this->page]['TrimBox'] : the intended dimensions of the finished page after trimming<ul><li>$this->pagedim[$this->page]['TrimBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['TrimBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['TrimBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['TrimBox']['ury'] = upper-right y coordinate in points</li></ul></li><li>$this->pagedim[$this->page]['ArtBox'] : the extent of the page's meaningful content<ul><li>$this->pagedim[$this->page]['ArtBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['ArtBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['ArtBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['ArtBox']['ury'] = upper-right y coordinate in points</li></ul></li></ul>\n"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageWidth","name":"TCPDF::getPageWidth","doc":"Returns the page width in units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageHeight","name":"TCPDF::getPageHeight","doc":"Returns the page height in units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getBreakMargin","name":"TCPDF::getBreakMargin","doc":"Returns the page break margin."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getScaleFactor","name":"TCPDF::getScaleFactor","doc":"Returns the scale factor (number of points in user unit)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetMargins","name":"TCPDF::SetMargins","doc":"Defines the left, top and right margins."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetLeftMargin","name":"TCPDF::SetLeftMargin","doc":"Defines the left margin. The method can be called before creating the first page. If the current abscissa gets out of page, it is brought back to the margin."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTopMargin","name":"TCPDF::SetTopMargin","doc":"Defines the top margin. The method can be called before creating the first page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetRightMargin","name":"TCPDF::SetRightMargin","doc":"Defines the right margin. The method can be called before creating the first page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetCellPadding","name":"TCPDF::SetCellPadding","doc":"Set the same internal Cell padding for top, right, bottom, left-"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setCellPaddings","name":"TCPDF::setCellPaddings","doc":"Set the internal Cell paddings."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellPaddings","name":"TCPDF::getCellPaddings","doc":"Get the internal Cell padding array."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setCellMargins","name":"TCPDF::setCellMargins","doc":"Set the internal Cell margins."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellMargins","name":"TCPDF::getCellMargins","doc":"Get the internal Cell margin array."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_adjustCellPadding","name":"TCPDF::adjustCellPadding","doc":"Adjust the internal Cell padding array to take account of the line width."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAutoPageBreak","name":"TCPDF::SetAutoPageBreak","doc":"Enables or disables the automatic page breaking mode. When enabling, the second parameter is the distance from the bottom of the page that defines the triggering limit. By default, the mode is on and the margin is 2 cm."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAutoPageBreak","name":"TCPDF::getAutoPageBreak","doc":"Return the auto-page-break mode (true or false)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDisplayMode","name":"TCPDF::SetDisplayMode","doc":"Defines the way the document is to be displayed by the viewer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetCompression","name":"TCPDF::SetCompression","doc":"Activates or deactivates page compression. When activated, the internal representation of each page is compressed, which leads to a compression ratio of about 2 for the resulting document. Compression is on by default."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSRGBmode","name":"TCPDF::setSRGBmode","doc":"Set flag to force sRGB_IEC61966-2.1 black scaled ICC color profile for the whole document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDocInfoUnicode","name":"TCPDF::SetDocInfoUnicode","doc":"Turn on/off Unicode mode for document information dictionary (meta tags)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTitle","name":"TCPDF::SetTitle","doc":"Defines the title of the document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetSubject","name":"TCPDF::SetSubject","doc":"Defines the subject of the document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAuthor","name":"TCPDF::SetAuthor","doc":"Defines the author of the document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetKeywords","name":"TCPDF::SetKeywords","doc":"Associates keywords with the document, generally in the form 'keyword1 keyword2 ...'."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetCreator","name":"TCPDF::SetCreator","doc":"Defines the creator of the document. This is typically the name of the application that generates the PDF."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Error","name":"TCPDF::Error","doc":"Throw an exception or print an error message and die if the K_TCPDF_THROW_EXCEPTION_ERROR constant is set to true."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Open","name":"TCPDF::Open","doc":"This method begins the generation of the PDF document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Close","name":"TCPDF::Close","doc":"Terminates the PDF document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPage","name":"TCPDF::setPage","doc":"Move pointer at the specified document page and update page dimensions."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_lastPage","name":"TCPDF::lastPage","doc":"Reset pointer to the last document page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPage","name":"TCPDF::getPage","doc":"Get current document page number."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getNumPages","name":"TCPDF::getNumPages","doc":"Get the total number of insered pages."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addTOCPage","name":"TCPDF::addTOCPage","doc":"Adds a new TOC (Table Of Content) page to the document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endTOCPage","name":"TCPDF::endTOCPage","doc":"Terminate the current TOC (Table Of Content) page"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AddPage","name":"TCPDF::AddPage","doc":"Adds a new page to the document. If a page is already present, the Footer() method is called first to output the footer (if enabled). Then the page is added, the current position set to the top-left corner according to the left and top margins (or top-right if in RTL mode), and Header() is called to display the header (if enabled)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endPage","name":"TCPDF::endPage","doc":"Terminate the current page"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startPage","name":"TCPDF::startPage","doc":"Starts a new page to the document. The page must be closed using the endPage() function."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageMark","name":"TCPDF::setPageMark","doc":"Set start-writing mark on current page stream used to put borders and fills."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setContentMark","name":"TCPDF::setContentMark","doc":"Set start-writing mark on selected page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeaderData","name":"TCPDF::setHeaderData","doc":"Set header data."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFooterData","name":"TCPDF::setFooterData","doc":"Set footer data."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHeaderData","name":"TCPDF::getHeaderData","doc":"Returns header data:</p>\n\n<ul><li>$ret['logo'] = logo image</li><li>$ret['logo_width'] = width of the image logo in user units</li><li>$ret['title'] = header title</li><li>$ret['string'] = header description string</li></ul>\n"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeaderMargin","name":"TCPDF::setHeaderMargin","doc":"Set header margin."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHeaderMargin","name":"TCPDF::getHeaderMargin","doc":"Returns header margin in user units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFooterMargin","name":"TCPDF::setFooterMargin","doc":"Set footer margin."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFooterMargin","name":"TCPDF::getFooterMargin","doc":"Returns footer margin in user units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPrintHeader","name":"TCPDF::setPrintHeader","doc":"Set a flag to print page header."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPrintFooter","name":"TCPDF::setPrintFooter","doc":"Set a flag to print page footer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getImageRBX","name":"TCPDF::getImageRBX","doc":"Return the right-bottom (or left-bottom for RTL) corner X coordinate of last inserted image"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getImageRBY","name":"TCPDF::getImageRBY","doc":"Return the right-bottom (or left-bottom for RTL) corner Y coordinate of last inserted image"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_resetHeaderTemplate","name":"TCPDF::resetHeaderTemplate","doc":"Reset the xobject template used by Header() method."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeaderTemplateAutoreset","name":"TCPDF::setHeaderTemplateAutoreset","doc":"Set a flag to automatically reset the xobject template used by Header() method at each page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Header","name":"TCPDF::Header","doc":"This method is used to render the page header."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Footer","name":"TCPDF::Footer","doc":"This method is used to render the page footer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeader","name":"TCPDF::setHeader","doc":"This method is used to render the page header."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFooter","name":"TCPDF::setFooter","doc":"This method is used to render the page footer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_inPageBody","name":"TCPDF::inPageBody","doc":"Check if we are on the page body (excluding page header and footer)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTableHeader","name":"TCPDF::setTableHeader","doc":"This method is used to render the table header on new page (if any)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PageNo","name":"TCPDF::PageNo","doc":"Returns the current page number."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAllSpotColors","name":"TCPDF::getAllSpotColors","doc":"Returns the array of spot colors."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AddSpotColor","name":"TCPDF::AddSpotColor","doc":"Defines a new spot color."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSpotColor","name":"TCPDF::setSpotColor","doc":"Set the spot color for the specified type ('draw', 'fill', 'text')."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDrawSpotColor","name":"TCPDF::SetDrawSpotColor","doc":"Defines the spot color used for all drawing operations (lines, rectangles and cell borders)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFillSpotColor","name":"TCPDF::SetFillSpotColor","doc":"Defines the spot color used for all filling operations (filled rectangles and cell backgrounds)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTextSpotColor","name":"TCPDF::SetTextSpotColor","doc":"Defines the spot color used for text."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setColorArray","name":"TCPDF::setColorArray","doc":"Set the color array for the specified type ('draw', 'fill', 'text')."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDrawColorArray","name":"TCPDF::SetDrawColorArray","doc":"Defines the color used for all drawing operations (lines, rectangles and cell borders)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFillColorArray","name":"TCPDF::SetFillColorArray","doc":"Defines the color used for all filling operations (filled rectangles and cell backgrounds)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTextColorArray","name":"TCPDF::SetTextColorArray","doc":"Defines the color used for text. It can be expressed in RGB components or gray scale."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setColor","name":"TCPDF::setColor","doc":"Defines the color used by the specified type ('draw', 'fill', 'text')."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDrawColor","name":"TCPDF::SetDrawColor","doc":"Defines the color used for all drawing operations (lines, rectangles and cell borders). It can be expressed in RGB components or gray scale. The method can be called before the first page is created and the value is retained from page to page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFillColor","name":"TCPDF::SetFillColor","doc":"Defines the color used for all filling operations (filled rectangles and cell backgrounds). It can be expressed in RGB components or gray scale. The method can be called before the first page is created and the value is retained from page to page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTextColor","name":"TCPDF::SetTextColor","doc":"Defines the color used for text. It can be expressed in RGB components or gray scale. The method can be called before the first page is created and the value is retained from page to page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetStringWidth","name":"TCPDF::GetStringWidth","doc":"Returns the length of a string in user unit. A font must be selected.<br>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetArrStringWidth","name":"TCPDF::GetArrStringWidth","doc":"Returns the string length of an array of chars in user unit or an array of characters widths. A font must be selected.<br>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetCharWidth","name":"TCPDF::GetCharWidth","doc":"Returns the length of the char in user unit for the current font considering current stretching and spacing (tracking)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getRawCharWidth","name":"TCPDF::getRawCharWidth","doc":"Returns the length of the char in user unit for the current font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetNumChars","name":"TCPDF::GetNumChars","doc":"Returns the numbero of characters in a string."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontsList","name":"TCPDF::getFontsList","doc":"Fill the list of available fonts ($this->fontlist)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AddFont","name":"TCPDF::AddFont","doc":"Imports a TrueType, Type1, core, or CID0 font and makes it available."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFont","name":"TCPDF::SetFont","doc":"Sets the font used to print character strings."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFontSize","name":"TCPDF::SetFontSize","doc":"Defines the size of the current font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontBBox","name":"TCPDF::getFontBBox","doc":"Returns the bounding box of the current font in user units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAbsFontMeasure","name":"TCPDF::getAbsFontMeasure","doc":"Convert a relative font measure into absolute value."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCharBBox","name":"TCPDF::getCharBBox","doc":"Returns the glyph bounding box of the specified character in the current font in user units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontDescent","name":"TCPDF::getFontDescent","doc":"Return the font descent value"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontAscent","name":"TCPDF::getFontAscent","doc":"Return the font ascent value."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_isCharDefined","name":"TCPDF::isCharDefined","doc":"Return true in the character is present in the specified font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_replaceMissingChars","name":"TCPDF::replaceMissingChars","doc":"Replace missing font characters on selected font with specified substitutions."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDefaultMonospacedFont","name":"TCPDF::SetDefaultMonospacedFont","doc":"Defines the default monospaced font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AddLink","name":"TCPDF::AddLink","doc":"Creates a new internal link and returns its identifier. An internal link is a clickable area which directs to another place within the document.<br />\nThe identifier can then be passed to Cell(), Write(), Image() or Link(). The destination is defined with SetLink()."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetLink","name":"TCPDF::SetLink","doc":"Defines the page and position a link points to."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Link","name":"TCPDF::Link","doc":"Puts a link on a rectangular area of the page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Annotation","name":"TCPDF::Annotation","doc":"Puts a markup annotation on a rectangular area of the page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putEmbeddedFiles","name":"TCPDF::_putEmbeddedFiles","doc":"Embedd the attached files."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Text","name":"TCPDF::Text","doc":"Prints a text cell at the specified position."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AcceptPageBreak","name":"TCPDF::AcceptPageBreak","doc":"Whenever a page break condition is met, the method is called, and the break is issued or not depending on the returned value."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_checkPageBreak","name":"TCPDF::checkPageBreak","doc":"Add page if needed."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Cell","name":"TCPDF::Cell","doc":"Prints a cell (rectangular area) with optional borders, background color and character string. The upper-left corner of the cell corresponds to the current position. The text can be aligned or centered. After the call, the current position moves to the right or to the next line. It is possible to put a link on the text.<br />\nIf automatic page breaking is enabled and the cell goes beyond the limit, a page break is done before outputting."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellCode","name":"TCPDF::getCellCode","doc":"Returns the PDF string code to print a cell (rectangular area) with optional borders, background color and character string. The upper-left corner of the cell corresponds to the current position. The text can be aligned or centered. After the call, the current position moves to the right or to the next line. It is possible to put a link on the text.<br />\nIf automatic page breaking is enabled and the cell goes beyond the limit, a page break is done before outputting."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_replaceChar","name":"TCPDF::replaceChar","doc":"Replace a char if is defined on the current font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellBorder","name":"TCPDF::getCellBorder","doc":"Returns the code to draw the cell border"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MultiCell","name":"TCPDF::MultiCell","doc":"This method allows printing text with line breaks."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getNumLines","name":"TCPDF::getNumLines","doc":"This method return the estimated number of lines for print a simple text string using Multicell() method."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getStringHeight","name":"TCPDF::getStringHeight","doc":"This method return the estimated height needed for printing a simple text string using the Multicell() method."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Write","name":"TCPDF::Write","doc":"This method prints text from the current position.<br />"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getRemainingWidth","name":"TCPDF::getRemainingWidth","doc":"Returns the remaining width between the current position and margins."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_fitBlock","name":"TCPDF::fitBlock","doc":"Set the block dimensions accounting for page breaks and page/column fitting"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Image","name":"TCPDF::Image","doc":"Puts an image in the page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ImagePngAlpha","name":"TCPDF::ImagePngAlpha","doc":"Extract info from a PNG image with alpha channel using the Imagick or GD library."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getGDgamma","name":"TCPDF::getGDgamma","doc":"Get the GD-corrected PNG gamma value from alpha color"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Ln","name":"TCPDF::Ln","doc":"Performs a line break."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetX","name":"TCPDF::GetX","doc":"Returns the relative X value of current position."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetAbsX","name":"TCPDF::GetAbsX","doc":"Returns the absolute X value of current position."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetY","name":"TCPDF::GetY","doc":"Returns the ordinate of the current position."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetX","name":"TCPDF::SetX","doc":"Defines the abscissa of the current position."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetY","name":"TCPDF::SetY","doc":"Moves the current abscissa back to the left margin and sets the ordinate."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetXY","name":"TCPDF::SetXY","doc":"Defines the abscissa and ordinate of the current position."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAbsX","name":"TCPDF::SetAbsX","doc":"Set the absolute X coordinate of the current pointer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAbsY","name":"TCPDF::SetAbsY","doc":"Set the absolute Y coordinate of the current pointer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAbsXY","name":"TCPDF::SetAbsXY","doc":"Set the absolute X and Y coordinates of the current pointer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Output","name":"TCPDF::Output","doc":"Send the document to a given destination: string, local file or browser."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__destroy","name":"TCPDF::_destroy","doc":"Unset all class variables except the following critical variables."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dochecks","name":"TCPDF::_dochecks","doc":"Check for locale-related bug"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getInternalPageNumberAliases","name":"TCPDF::getInternalPageNumberAliases","doc":"Return an array containing variations for the basic page number alias."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAllInternalPageNumberAliases","name":"TCPDF::getAllInternalPageNumberAliases","doc":"Return an array containing all internal page aliases."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_replaceRightShiftPageNumAliases","name":"TCPDF::replaceRightShiftPageNumAliases","doc":"Replace right shift page number aliases with spaces to correct right alignment."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageBoxTypes","name":"TCPDF::setPageBoxTypes","doc":"Set page boxes to be included on page descriptions."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putpages","name":"TCPDF::_putpages","doc":"Output pages (and replace page number aliases)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__getannotsrefs","name":"TCPDF::_getannotsrefs","doc":"Get references to page annotations."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putannotsobjs","name":"TCPDF::_putannotsobjs","doc":"Output annotations objects for all pages."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putAPXObject","name":"TCPDF::_putAPXObject","doc":"Put appearance streams XObject used to define annotation's appearance states."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putfonts","name":"TCPDF::_putfonts","doc":"Output fonts."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__puttruetypeunicode","name":"TCPDF::_puttruetypeunicode","doc":"Adds unicode fonts.<br>\nBased on PDF Reference 1.3 (section 5)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putcidfont0","name":"TCPDF::_putcidfont0","doc":"Output CID-0 fonts."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putimages","name":"TCPDF::_putimages","doc":"Output images."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putxobjects","name":"TCPDF::_putxobjects","doc":"Output Form XObjects Templates."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putspotcolors","name":"TCPDF::_putspotcolors","doc":"Output Spot Colors Resources."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__getxobjectdict","name":"TCPDF::_getxobjectdict","doc":"Return XObjects Dictionary."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putresourcedict","name":"TCPDF::_putresourcedict","doc":"Output Resources Dictionary."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putresources","name":"TCPDF::_putresources","doc":"Output Resources."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putinfo","name":"TCPDF::_putinfo","doc":"Adds some Metadata information (Document Information Dictionary)\n(see Chapter 14.3.3 Document Information Dictionary of PDF32000_2008.pdf Reference)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setExtraXMP","name":"TCPDF::setExtraXMP","doc":"Set additional XMP data to be added on the default XMP data just before the end of \"x:xmpmeta\" tag."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setExtraXMPRDF","name":"TCPDF::setExtraXMPRDF","doc":"Set additional XMP data to be added on the default XMP data just before the end of \"rdf:RDF\" tag."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putXMP","name":"TCPDF::_putXMP","doc":"Put XMP data object and return ID."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putcatalog","name":"TCPDF::_putcatalog","doc":"Output Catalog."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putviewerpreferences","name":"TCPDF::_putviewerpreferences","doc":"Output viewer preferences."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putheader","name":"TCPDF::_putheader","doc":"Output PDF File Header (7.5.2)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__enddoc","name":"TCPDF::_enddoc","doc":"Output end of document (EOF)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__beginpage","name":"TCPDF::_beginpage","doc":"Initialize a new page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__endpage","name":"TCPDF::_endpage","doc":"Mark end of page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__newobj","name":"TCPDF::_newobj","doc":"Begin a new object and return the object number."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__getobj","name":"TCPDF::_getobj","doc":"Return the starting object string for the selected object ID."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dounderline","name":"TCPDF::_dounderline","doc":"Underline text."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dounderlinew","name":"TCPDF::_dounderlinew","doc":"Underline for rectangular text area."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dolinethrough","name":"TCPDF::_dolinethrough","doc":"Line through text."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dolinethroughw","name":"TCPDF::_dolinethroughw","doc":"Line through for rectangular text area."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dooverline","name":"TCPDF::_dooverline","doc":"Overline text."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dooverlinew","name":"TCPDF::_dooverlinew","doc":"Overline for rectangular text area."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__datastring","name":"TCPDF::_datastring","doc":"Format a data string for meta information"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setDocCreationTimestamp","name":"TCPDF::setDocCreationTimestamp","doc":"Set the document creation timestamp"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setDocModificationTimestamp","name":"TCPDF::setDocModificationTimestamp","doc":"Set the document modification timestamp"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getDocCreationTimestamp","name":"TCPDF::getDocCreationTimestamp","doc":"Returns document creation timestamp in seconds."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getDocModificationTimestamp","name":"TCPDF::getDocModificationTimestamp","doc":"Returns document modification timestamp in seconds."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__datestring","name":"TCPDF::_datestring","doc":"Returns a formatted date for meta information"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__textstring","name":"TCPDF::_textstring","doc":"Format a text string for meta information"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__getrawstream","name":"TCPDF::_getrawstream","doc":"get raw output stream."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__out","name":"TCPDF::_out","doc":"Output a string to the document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeaderFont","name":"TCPDF::setHeaderFont","doc":"Set header font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHeaderFont","name":"TCPDF::getHeaderFont","doc":"Get header font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFooterFont","name":"TCPDF::setFooterFont","doc":"Set footer font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFooterFont","name":"TCPDF::getFooterFont","doc":"Get Footer font."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setLanguageArray","name":"TCPDF::setLanguageArray","doc":"Set language array."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPDFData","name":"TCPDF::getPDFData","doc":"Returns the PDF data."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addHtmlLink","name":"TCPDF::addHtmlLink","doc":"Output anchor link."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_pixelsToUnits","name":"TCPDF::pixelsToUnits","doc":"Converts pixels to User's Units."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_unhtmlentities","name":"TCPDF::unhtmlentities","doc":"Reverse function for htmlentities."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__objectkey","name":"TCPDF::_objectkey","doc":"Compute encryption key depending on object number where the encrypted data is stored."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__encrypt_data","name":"TCPDF::_encrypt_data","doc":"Encrypt the input string."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putencryption","name":"TCPDF::_putencryption","doc":"Put encryption on PDF document."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__Uvalue","name":"TCPDF::_Uvalue","doc":"Compute U value (used for encryption)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__UEvalue","name":"TCPDF::_UEvalue","doc":"Compute UE value (used for encryption)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__Ovalue","name":"TCPDF::_Ovalue","doc":"Compute O value (used for encryption)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__OEvalue","name":"TCPDF::_OEvalue","doc":"Compute OE value (used for encryption)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__fixAES256Password","name":"TCPDF::_fixAES256Password","doc":"Convert password for AES-256 encryption mode"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__generateencryptionkey","name":"TCPDF::_generateencryptionkey","doc":"Compute encryption key"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetProtection","name":"TCPDF::SetProtection","doc":"Set document protection\nRemark: the protection against modification is for people who have the full Acrobat product."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_StartTransform","name":"TCPDF::StartTransform","doc":"Starts a 2D tranformation saving current graphic state."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_StopTransform","name":"TCPDF::StopTransform","doc":"Stops a 2D tranformation restoring previous graphic state."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ScaleX","name":"TCPDF::ScaleX","doc":"Horizontal Scaling."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ScaleY","name":"TCPDF::ScaleY","doc":"Vertical Scaling."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ScaleXY","name":"TCPDF::ScaleXY","doc":"Vertical and horizontal proportional Scaling."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Scale","name":"TCPDF::Scale","doc":"Vertical and horizontal non-proportional Scaling."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MirrorH","name":"TCPDF::MirrorH","doc":"Horizontal Mirroring."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MirrorV","name":"TCPDF::MirrorV","doc":"Verical Mirroring."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MirrorP","name":"TCPDF::MirrorP","doc":"Point reflection mirroring."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MirrorL","name":"TCPDF::MirrorL","doc":"Reflection against a straight line through point (x, y) with the gradient angle (angle)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_TranslateX","name":"TCPDF::TranslateX","doc":"Translate graphic object horizontally."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_TranslateY","name":"TCPDF::TranslateY","doc":"Translate graphic object vertically."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Translate","name":"TCPDF::Translate","doc":"Translate graphic object horizontally and vertically."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Rotate","name":"TCPDF::Rotate","doc":"Rotate object."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SkewX","name":"TCPDF::SkewX","doc":"Skew horizontally."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SkewY","name":"TCPDF::SkewY","doc":"Skew vertically."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Skew","name":"TCPDF::Skew","doc":"Skew."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Transform","name":"TCPDF::Transform","doc":"Apply graphic transformations."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetLineWidth","name":"TCPDF::SetLineWidth","doc":"Defines the line width. By default, the value equals 0.2 mm. The method can be called before the first page is created and the value is retained from page to page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetLineWidth","name":"TCPDF::GetLineWidth","doc":"Returns the current the line width."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetLineStyle","name":"TCPDF::SetLineStyle","doc":"Set line style."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outPoint","name":"TCPDF::_outPoint","doc":"Begin a new subpath by moving the current point to coordinates (x, y), omitting any connecting line segment."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outLine","name":"TCPDF::_outLine","doc":"Append a straight line segment from the current point to the point (x, y)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outRect","name":"TCPDF::_outRect","doc":"Append a rectangle to the current path as a complete subpath, with lower-left corner (x, y) and dimensions widthand height in user space."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outCurve","name":"TCPDF::_outCurve","doc":"Append a cubic Bezier curve to the current path. The curve shall extend from the current point to the point (x3, y3), using (x1, y1) and (x2, y2) as the Bezier control points."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outCurveV","name":"TCPDF::_outCurveV","doc":"Append a cubic Bezier curve to the current path. The curve shall extend from the current point to the point (x3, y3), using the current point and (x2, y2) as the Bezier control points."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outCurveY","name":"TCPDF::_outCurveY","doc":"Append a cubic Bezier curve to the current path. The curve shall extend from the current point to the point (x3, y3), using (x1, y1) and (x3, y3) as the Bezier control points."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Line","name":"TCPDF::Line","doc":"Draws a line between two points."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Rect","name":"TCPDF::Rect","doc":"Draws a rectangle."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Curve","name":"TCPDF::Curve","doc":"Draws a Bezier curve."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Polycurve","name":"TCPDF::Polycurve","doc":"Draws a poly-Bezier curve."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Ellipse","name":"TCPDF::Ellipse","doc":"Draws an ellipse."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outellipticalarc","name":"TCPDF::_outellipticalarc","doc":"Append an elliptical arc to the current path."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Circle","name":"TCPDF::Circle","doc":"Draws a circle."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PolyLine","name":"TCPDF::PolyLine","doc":"Draws a polygonal line"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Polygon","name":"TCPDF::Polygon","doc":"Draws a polygon."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RegularPolygon","name":"TCPDF::RegularPolygon","doc":"Draws a regular polygon."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_StarPolygon","name":"TCPDF::StarPolygon","doc":"Draws a star polygon"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RoundedRect","name":"TCPDF::RoundedRect","doc":"Draws a rounded rectangle."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RoundedRectXY","name":"TCPDF::RoundedRectXY","doc":"Draws a rounded rectangle."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Arrow","name":"TCPDF::Arrow","doc":"Draws a grahic arrow."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setDestination","name":"TCPDF::setDestination","doc":"Add a Named Destination."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getDestination","name":"TCPDF::getDestination","doc":"Return the Named Destination array."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putdests","name":"TCPDF::_putdests","doc":"Insert Named Destinations."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setBookmark","name":"TCPDF::setBookmark","doc":"Adds a bookmark - alias for Bookmark()."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Bookmark","name":"TCPDF::Bookmark","doc":"Adds a bookmark."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_sortBookmarks","name":"TCPDF::sortBookmarks","doc":"Sort bookmarks for page and key."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putbookmarks","name":"TCPDF::_putbookmarks","doc":"Create a bookmark PDF string."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_IncludeJS","name":"TCPDF::IncludeJS","doc":"Adds a javascript"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addJavascriptObject","name":"TCPDF::addJavascriptObject","doc":"Adds a javascript object and return object ID"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putjavascript","name":"TCPDF::_putjavascript","doc":"Create a javascript PDF string."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__addfield","name":"TCPDF::_addfield","doc":"Adds a javascript form field."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFormDefaultProp","name":"TCPDF::setFormDefaultProp","doc":"Set default properties for form fields."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFormDefaultProp","name":"TCPDF::getFormDefaultProp","doc":"Return the default properties for form fields."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_TextField","name":"TCPDF::TextField","doc":"Creates a text field"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RadioButton","name":"TCPDF::RadioButton","doc":"Creates a RadioButton field."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ListBox","name":"TCPDF::ListBox","doc":"Creates a List-box field"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ComboBox","name":"TCPDF::ComboBox","doc":"Creates a Combo-box field"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_CheckBox","name":"TCPDF::CheckBox","doc":"Creates a CheckBox field"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Button","name":"TCPDF::Button","doc":"Creates a button field"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putsignature","name":"TCPDF::_putsignature","doc":"Add certification signature (DocMDP or UR3)\nYou can set only one signature type"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setUserRights","name":"TCPDF::setUserRights","doc":"Set User's Rights for PDF Reader\nWARNING: This is experimental and currently do not work."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSignature","name":"TCPDF::setSignature","doc":"Enable document signature (requires the OpenSSL Library)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSignatureAppearance","name":"TCPDF::setSignatureAppearance","doc":"Set the digital signature appearance (a cliccable rectangle area to get signature properties)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addEmptySignatureAppearance","name":"TCPDF::addEmptySignatureAppearance","doc":"Add an empty digital signature appearance (a cliccable rectangle area to get signature properties)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getSignatureAppearanceArray","name":"TCPDF::getSignatureAppearanceArray","doc":"Get the array that defines the signature appearance (page and rectangle coordinates)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTimeStamp","name":"TCPDF::setTimeStamp","doc":"Enable document timestamping (requires the OpenSSL Library)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_applyTSA","name":"TCPDF::applyTSA","doc":"NOT YET IMPLEMENTED\nRequest TSA for a timestamp"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startPageGroup","name":"TCPDF::startPageGroup","doc":"Create a new page group."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setStartingPageNumber","name":"TCPDF::setStartingPageNumber","doc":"Set the starting page number."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAliasRightShift","name":"TCPDF::getAliasRightShift","doc":"Returns the string alias used right align page numbers."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAliasNbPages","name":"TCPDF::getAliasNbPages","doc":"Returns the string alias used for the total number of pages."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAliasNumPage","name":"TCPDF::getAliasNumPage","doc":"Returns the string alias used for the page number."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageGroupAlias","name":"TCPDF::getPageGroupAlias","doc":"Return the alias for the total number of pages in the current page group."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageNumGroupAlias","name":"TCPDF::getPageNumGroupAlias","doc":"Return the alias for the page number on the current page group."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getGroupPageNo","name":"TCPDF::getGroupPageNo","doc":"Return the current page in the group."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getGroupPageNoFormatted","name":"TCPDF::getGroupPageNoFormatted","doc":"Returns the current group page number formatted as a string."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PageNoFormatted","name":"TCPDF::PageNoFormatted","doc":"Returns the current page number formatted as a string."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putocg","name":"TCPDF::_putocg","doc":"Put pdf layers."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startLayer","name":"TCPDF::startLayer","doc":"Start a new pdf layer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endLayer","name":"TCPDF::endLayer","doc":"End the current PDF layer."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setVisibility","name":"TCPDF::setVisibility","doc":"Set the visibility of the successive elements."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addExtGState","name":"TCPDF::addExtGState","doc":"Add transparency parameters to the current extgstate"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setExtGState","name":"TCPDF::setExtGState","doc":"Add an extgstate"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putextgstates","name":"TCPDF::_putextgstates","doc":"Put extgstates for object transparency"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setOverprint","name":"TCPDF::setOverprint","doc":"Set overprint mode for stroking (OP) and non-stroking (op) painting operations."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getOverprint","name":"TCPDF::getOverprint","doc":"Get the overprint mode array (OP, op, OPM)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setAlpha","name":"TCPDF::setAlpha","doc":"Set alpha for stroking (CA) and non-stroking (ca) operations."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAlpha","name":"TCPDF::getAlpha","doc":"Get the alpha mode array (CA, ca, BM, AIS)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setJPEGQuality","name":"TCPDF::setJPEGQuality","doc":"Set the default JPEG compression quality (1-100)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setDefaultTableColumns","name":"TCPDF::setDefaultTableColumns","doc":"Set the default number of columns in a row for HTML tables."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setCellHeightRatio","name":"TCPDF::setCellHeightRatio","doc":"Set the height of the cell (line height) respect the font height."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellHeightRatio","name":"TCPDF::getCellHeightRatio","doc":"return the height of cell repect font height."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPDFVersion","name":"TCPDF::setPDFVersion","doc":"Set the PDF version (check PDF reference for valid values)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setViewerPreferences","name":"TCPDF::setViewerPreferences","doc":"Set the viewer preferences dictionary controlling the way the document is to be presented on the screen or in print."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_colorRegistrationBar","name":"TCPDF::colorRegistrationBar","doc":"Paints color transition registration bars"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_cropMark","name":"TCPDF::cropMark","doc":"Paints crop marks."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_registrationMark","name":"TCPDF::registrationMark","doc":"Paints a registration mark"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_registrationMarkCMYK","name":"TCPDF::registrationMarkCMYK","doc":"Paints a CMYK registration mark"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_LinearGradient","name":"TCPDF::LinearGradient","doc":"Paints a linear colour gradient."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RadialGradient","name":"TCPDF::RadialGradient","doc":"Paints a radial colour gradient."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_CoonsPatchMesh","name":"TCPDF::CoonsPatchMesh","doc":"Paints a coons patch mesh."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Clip","name":"TCPDF::Clip","doc":"Set a rectangular clipping area."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Gradient","name":"TCPDF::Gradient","doc":"Output gradient."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putshaders","name":"TCPDF::_putshaders","doc":"Output gradient shaders."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PieSector","name":"TCPDF::PieSector","doc":"Draw the sector of a circle."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PieSectorXY","name":"TCPDF::PieSectorXY","doc":"Draw the sector of an ellipse."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ImageEps","name":"TCPDF::ImageEps","doc":"Embed vector-based Adobe Illustrator (AI) or AI-compatible EPS files."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setBarcode","name":"TCPDF::setBarcode","doc":"Set document barcode."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getBarcode","name":"TCPDF::getBarcode","doc":"Get current barcode."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_write1DBarcode","name":"TCPDF::write1DBarcode","doc":"Print a Linear Barcode."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_write2DBarcode","name":"TCPDF::write2DBarcode","doc":"Print 2D Barcode."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getMargins","name":"TCPDF::getMargins","doc":"Returns an array containing current margins:</p>\n\n<ul>\n<li>$ret['left'] = left margin</li>\n<li>$ret['right'] = right margin</li>\n<li>$ret['top'] = top margin</li>\n<li>$ret['bottom'] = bottom margin</li>\n<li>$ret['header'] = header margin</li>\n<li>$ret['footer'] = footer margin</li>\n<li>$ret['cell'] = cell padding array</li>\n<li>$ret['padding_left'] = cell left padding</li>\n<li>$ret['padding_top'] = cell top padding</li>\n<li>$ret['padding_right'] = cell right padding</li>\n<li>$ret['padding_bottom'] = cell bottom padding</li>\n</ul>\n"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getOriginalMargins","name":"TCPDF::getOriginalMargins","doc":"Returns an array containing original margins:</p>\n\n<ul>\n<li>$ret['left'] = left margin</li>\n<li>$ret['right'] = right margin</li>\n</ul>\n"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontSize","name":"TCPDF::getFontSize","doc":"Returns the current font size."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontSizePt","name":"TCPDF::getFontSizePt","doc":"Returns the current font size in points unit."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontFamily","name":"TCPDF::getFontFamily","doc":"Returns the current font family name."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontStyle","name":"TCPDF::getFontStyle","doc":"Returns the current font style."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_fixHTMLCode","name":"TCPDF::fixHTMLCode","doc":"Cleanup HTML code (requires HTML Tidy library)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSBorderWidth","name":"TCPDF::getCSSBorderWidth","doc":"Returns the border width from CSS property"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSBorderDashStyle","name":"TCPDF::getCSSBorderDashStyle","doc":"Returns the border dash style from CSS property"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSBorderStyle","name":"TCPDF::getCSSBorderStyle","doc":"Returns the border style array from CSS border properties"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSPadding","name":"TCPDF::getCSSPadding","doc":"Get the internal Cell padding from CSS attribute."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSMargin","name":"TCPDF::getCSSMargin","doc":"Get the internal Cell margin from CSS attribute."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSBorderMargin","name":"TCPDF::getCSSBorderMargin","doc":"Get the border-spacing from CSS attribute."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSFontSpacing","name":"TCPDF::getCSSFontSpacing","doc":"Returns the letter-spacing value from CSS value"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSFontStretching","name":"TCPDF::getCSSFontStretching","doc":"Returns the percentage of font stretching from CSS value"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHTMLFontUnits","name":"TCPDF::getHTMLFontUnits","doc":"Convert HTML string containing font size value to points"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHtmlDomArray","name":"TCPDF::getHtmlDomArray","doc":"Returns the HTML DOM array."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getSpaceString","name":"TCPDF::getSpaceString","doc":"Returns the string used to find spaces"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHashForTCPDFtagParams","name":"TCPDF::getHashForTCPDFtagParams","doc":"Return an hash code used to ensure that the serialized data has been generated by this TCPDF instance."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_serializeTCPDFtagParameters","name":"TCPDF::serializeTCPDFtagParameters","doc":"Serialize an array of parameters to be used with TCPDF tag in HTML code."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_unserializeTCPDFtagParameters","name":"TCPDF::unserializeTCPDFtagParameters","doc":"Unserialize parameters to be used with TCPDF tag in HTML code."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_writeHTMLCell","name":"TCPDF::writeHTMLCell","doc":"Prints a cell (rectangular area) with optional borders, background color and html text string."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_writeHTML","name":"TCPDF::writeHTML","doc":"Allows to preserve some HTML formatting (limited support).<br />\nIMPORTANT: The HTML must be well formatted - try to clean-up it using an application like HTML-Tidy before submitting."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_openHTMLTagHandler","name":"TCPDF::openHTMLTagHandler","doc":"Process opening tags."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_closeHTMLTagHandler","name":"TCPDF::closeHTMLTagHandler","doc":"Process closing tags."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addHTMLVertSpace","name":"TCPDF::addHTMLVertSpace","doc":"Add vertical spaces if needed."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getBorderStartPosition","name":"TCPDF::getBorderStartPosition","doc":"Return the starting coordinates to draw an html border"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_drawHTMLTagBorder","name":"TCPDF::drawHTMLTagBorder","doc":"Draw an HTML block border and fill"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setLIsymbol","name":"TCPDF::setLIsymbol","doc":"Set the default bullet to be used as LI bullet symbol"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetBooklet","name":"TCPDF::SetBooklet","doc":"Set the booklet mode for double-sided pages."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_swapMargins","name":"TCPDF::swapMargins","doc":"Swap the left and right margins."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHtmlVSpace","name":"TCPDF::setHtmlVSpace","doc":"Set the vertical spaces for HTML tags."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setListIndentWidth","name":"TCPDF::setListIndentWidth","doc":"Set custom width for list indentation."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setOpenCell","name":"TCPDF::setOpenCell","doc":"Set the top/bottom cell sides to be open or closed when the cell cross the page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHtmlLinksStyle","name":"TCPDF::setHtmlLinksStyle","doc":"Set the color and font style for HTML links."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHTMLUnitToUnits","name":"TCPDF::getHTMLUnitToUnits","doc":"Convert HTML string containing value and unit of measure to user's units or points."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_putHtmlListBullet","name":"TCPDF::putHtmlListBullet","doc":"Output an HTML list bullet or ordered item symbol"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getGraphicVars","name":"TCPDF::getGraphicVars","doc":"Returns current graphic variables as array."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setGraphicVars","name":"TCPDF::setGraphicVars","doc":"Set graphic variables."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outSaveGraphicsState","name":"TCPDF::_outSaveGraphicsState","doc":"Outputs the \"save graphics state\" operator 'q'"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outRestoreGraphicsState","name":"TCPDF::_outRestoreGraphicsState","doc":"Outputs the \"restore graphics state\" operator 'Q'"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setBuffer","name":"TCPDF::setBuffer","doc":"Set buffer content (always append data)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_replaceBuffer","name":"TCPDF::replaceBuffer","doc":"Replace the buffer content"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getBuffer","name":"TCPDF::getBuffer","doc":"Get buffer content."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageBuffer","name":"TCPDF::setPageBuffer","doc":"Set page buffer content."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageBuffer","name":"TCPDF::getPageBuffer","doc":"Get page buffer content."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setImageBuffer","name":"TCPDF::setImageBuffer","doc":"Set image buffer content."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setImageSubBuffer","name":"TCPDF::setImageSubBuffer","doc":"Set image buffer content for a specified sub-key."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getImageBuffer","name":"TCPDF::getImageBuffer","doc":"Get image buffer content."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontBuffer","name":"TCPDF::setFontBuffer","doc":"Set font buffer content."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontSubBuffer","name":"TCPDF::setFontSubBuffer","doc":"Set font buffer content."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontBuffer","name":"TCPDF::getFontBuffer","doc":"Get font buffer content."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_movePage","name":"TCPDF::movePage","doc":"Move a page to a previous position."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_deletePage","name":"TCPDF::deletePage","doc":"Remove the specified page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_copyPage","name":"TCPDF::copyPage","doc":"Clone the specified page to a new page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addTOC","name":"TCPDF::addTOC","doc":"Output a Table of Content Index (TOC)."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addHTMLTOC","name":"TCPDF::addHTMLTOC","doc":"Output a Table Of Content Index (TOC) using HTML templates."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startTransaction","name":"TCPDF::startTransaction","doc":"Stores a copy of the current TCPDF object used for undo operation."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_commitTransaction","name":"TCPDF::commitTransaction","doc":"Delete the copy of the current TCPDF object used for undo operation."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_rollbackTransaction","name":"TCPDF::rollbackTransaction","doc":"This method allows to undo the latest transaction by returning the latest saved TCPDF object with startTransaction()."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setEqualColumns","name":"TCPDF::setEqualColumns","doc":"Set multiple columns of the same size"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_resetColumns","name":"TCPDF::resetColumns","doc":"Remove columns and reset page margins."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setColumnsArray","name":"TCPDF::setColumnsArray","doc":"Set columns array."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_selectColumn","name":"TCPDF::selectColumn","doc":"Set position at a given column"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getColumn","name":"TCPDF::getColumn","doc":"Return the current column number"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getNumberOfColumns","name":"TCPDF::getNumberOfColumns","doc":"Return the current number of columns."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTextRenderingMode","name":"TCPDF::setTextRenderingMode","doc":"Set Text rendering mode."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTextShadow","name":"TCPDF::setTextShadow","doc":"Set parameters for drop shadow effect for text."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getTextShadow","name":"TCPDF::getTextShadow","doc":"Return the text shadow parameters array."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_hyphenateWord","name":"TCPDF::hyphenateWord","doc":"Returns an array of chars containing soft hyphens."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_hyphenateText","name":"TCPDF::hyphenateText","doc":"Returns text with soft hyphens."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setRasterizeVectorImages","name":"TCPDF::setRasterizeVectorImages","doc":"Enable/disable rasterization of vector images using ImageMagick library."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontSubsetting","name":"TCPDF::setFontSubsetting","doc":"Enable or disable default option for font subsetting."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontSubsetting","name":"TCPDF::getFontSubsetting","doc":"Return the default option for font subsetting."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_stringLeftTrim","name":"TCPDF::stringLeftTrim","doc":"Left trim the input string"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_stringRightTrim","name":"TCPDF::stringRightTrim","doc":"Right trim the input string"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_stringTrim","name":"TCPDF::stringTrim","doc":"Trim the input string"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_isUnicodeFont","name":"TCPDF::isUnicodeFont","doc":"Return true if the current font is unicode type."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontFamilyName","name":"TCPDF::getFontFamilyName","doc":"Return normalized font name"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startTemplate","name":"TCPDF::startTemplate","doc":"Start a new XObject Template."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endTemplate","name":"TCPDF::endTemplate","doc":"End the current XObject Template started with startTemplate() and restore the previous graphic state."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_printTemplate","name":"TCPDF::printTemplate","doc":"Print an XObject Template."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontStretching","name":"TCPDF::setFontStretching","doc":"Set the percentage of character stretching."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontStretching","name":"TCPDF::getFontStretching","doc":"Get the percentage of character stretching."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontSpacing","name":"TCPDF::setFontSpacing","doc":"Set the amount to increase or decrease the space between characters in a text."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontSpacing","name":"TCPDF::getFontSpacing","doc":"Get the amount to increase or decrease the space between characters in a text."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageRegions","name":"TCPDF::getPageRegions","doc":"Return an array of no-write page regions"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageRegions","name":"TCPDF::setPageRegions","doc":"Set no-write regions on page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addPageRegion","name":"TCPDF::addPageRegion","doc":"Add a single no-write region on selected page."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_removePageRegion","name":"TCPDF::removePageRegion","doc":"Remove a single no-write region."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_checkPageRegions","name":"TCPDF::checkPageRegions","doc":"Check page for no-write regions and adapt current coordinates and page margins if necessary."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ImageSVG","name":"TCPDF::ImageSVG","doc":"Embedd a Scalable Vector Graphics (SVG) image."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_convertSVGtMatrix","name":"TCPDF::convertSVGtMatrix","doc":"Convert SVG transformation matrix to PDF."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SVGTransform","name":"TCPDF::SVGTransform","doc":"Apply SVG graphic transformation matrix."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSVGStyles","name":"TCPDF::setSVGStyles","doc":"Apply the requested SVG styles (*** TO BE COMPLETED ***)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SVGPath","name":"TCPDF::SVGPath","doc":"Draws an SVG path"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_removeTagNamespace","name":"TCPDF::removeTagNamespace","doc":"Return the tag name without the namespace"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startSVGElementHandler","name":"TCPDF::startSVGElementHandler","doc":"Sets the opening SVG element handler function for the XML parser. (*** TO BE COMPLETED ***)"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endSVGElementHandler","name":"TCPDF::endSVGElementHandler","doc":"Sets the closing SVG element handler function for the XML parser."},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_segSVGContentHandler","name":"TCPDF::segSVGContentHandler","doc":"Sets the character data handler function for the XML parser."},
            
                    {"type":"Class","link":"TCPDF2DBarcode.html","name":"TCPDF2DBarcode","doc":"PHP class to creates array representations for 2D barcodes to be used with WarnockPDF."},
                                {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method___construct","name":"TCPDF2DBarcode::__construct","doc":"This is the class constructor."},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodeArray","name":"TCPDF2DBarcode::getBarcodeArray","doc":"Return an array representations of barcode."},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodeSVG","name":"TCPDF2DBarcode::getBarcodeSVG","doc":"Send barcode as SVG image object to the standard output."},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodeSVGcode","name":"TCPDF2DBarcode::getBarcodeSVGcode","doc":"Return a SVG string representation of barcode."},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodeHTML","name":"TCPDF2DBarcode::getBarcodeHTML","doc":"Return an HTML representation of barcode."},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodePNG","name":"TCPDF2DBarcode::getBarcodePNG","doc":"Send a PNG image representation of barcode (requires GD or Imagick library)."},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodePngData","name":"TCPDF2DBarcode::getBarcodePngData","doc":"Return a PNG image representation of barcode (requires GD or Imagick library)."},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_setBarcode","name":"TCPDF2DBarcode::setBarcode","doc":"Set the barcode."},
            
                    {"type":"Class","link":"TCPDFBarcode.html","name":"TCPDFBarcode","doc":"PHP class to creates array representations for common 1D barcodes to be used with WarnockPDF.<br>"},
                                {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method___construct","name":"TCPDFBarcode::__construct","doc":"This is the class constructor."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodeArray","name":"TCPDFBarcode::getBarcodeArray","doc":"Return an array representations of barcode."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodeSVG","name":"TCPDFBarcode::getBarcodeSVG","doc":"Send barcode as SVG image object to the standard output."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodeSVGcode","name":"TCPDFBarcode::getBarcodeSVGcode","doc":"Return a SVG string representation of barcode."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodeHTML","name":"TCPDFBarcode::getBarcodeHTML","doc":"Return an HTML representation of barcode."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodePNG","name":"TCPDFBarcode::getBarcodePNG","doc":"Send a PNG image representation of barcode (requires GD or Imagick library)."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodePngData","name":"TCPDFBarcode::getBarcodePngData","doc":"Return a PNG image representation of barcode (requires GD or Imagick library)."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_setBarcode","name":"TCPDFBarcode::setBarcode","doc":"Set the barcode."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_code39","name":"TCPDFBarcode::barcode_code39","doc":"CODE 39 - ANSI MH10.8M-1983 - USD-3 - 3 of 9."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_encode_code39_ext","name":"TCPDFBarcode::encode_code39_ext","doc":"Encode a string to be used for CODE 39 Extended mode."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_checksum_code39","name":"TCPDFBarcode::checksum_code39","doc":"Calculate CODE 39 checksum (modulo 43)."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_code93","name":"TCPDFBarcode::barcode_code93","doc":"CODE 93 - USS-93\nCompact code similar to Code 39"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_checksum_code93","name":"TCPDFBarcode::checksum_code93","doc":"Calculate CODE 93 checksum (modulo 47)."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_checksum_s25","name":"TCPDFBarcode::checksum_s25","doc":"Checksum for standard 2 of 5 barcodes."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_msi","name":"TCPDFBarcode::barcode_msi","doc":"MSI."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_s25","name":"TCPDFBarcode::barcode_s25","doc":"Standard 2 of 5 barcodes."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_binseq_to_array","name":"TCPDFBarcode::binseq_to_array","doc":"Convert binary barcode sequence to WarnockPDF barcode array."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_i25","name":"TCPDFBarcode::barcode_i25","doc":"Interleaved 2 of 5 barcodes."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_c128","name":"TCPDFBarcode::barcode_c128","doc":"C128 barcodes."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_get128ABsequence","name":"TCPDFBarcode::get128ABsequence","doc":"Split text code in A/B sequence for 128 code"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_eanupc","name":"TCPDFBarcode::barcode_eanupc","doc":"EAN13 and UPC-A barcodes."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_eanext","name":"TCPDFBarcode::barcode_eanext","doc":"UPC-Based Extensions\n2-Digit Ext.: Used to indicate magazines and newspaper issue numbers\n5-Digit Ext.: Used to mark suggested retail price of books"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_postnet","name":"TCPDFBarcode::barcode_postnet","doc":"POSTNET and PLANET barcodes."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_rms4cc","name":"TCPDFBarcode::barcode_rms4cc","doc":"RMS4CC - CBC - KIX\nRMS4CC (Royal Mail 4-state Customer Code) - CBC (Customer Bar Code) - KIX (Klant index - Customer index)\nRM4SCC is the name of the barcode symbology used by the Royal Mail for its Cleanmail service."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_codabar","name":"TCPDFBarcode::barcode_codabar","doc":"CODABAR barcodes."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_code11","name":"TCPDFBarcode::barcode_code11","doc":"CODE11 barcodes."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_pharmacode","name":"TCPDFBarcode::barcode_pharmacode","doc":"Pharmacode\nContains digits (0 to 9)"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_pharmacode2t","name":"TCPDFBarcode::barcode_pharmacode2t","doc":"Pharmacode two-track\nContains digits (0 to 9)"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_imb","name":"TCPDFBarcode::barcode_imb","doc":"IMB - Intelligent Mail Barcode - Onecode - USPS-B-3200\n(requires PHP bcmath extension)\nIntelligent Mail barcode is a 65-bar code for use on mail in the United States."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_imb_pre","name":"TCPDFBarcode::barcode_imb_pre","doc":"IMB - Intelligent Mail Barcode - Onecode - USPS-B-3200"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_dec_to_hex","name":"TCPDFBarcode::dec_to_hex","doc":"Convert large integer number to hexadecimal representation."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_hex_to_dec","name":"TCPDFBarcode::hex_to_dec","doc":"Convert large hexadecimal number to decimal representation (string)."},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_imb_crc11fcs","name":"TCPDFBarcode::imb_crc11fcs","doc":"Intelligent Mail Barcode calculation of Frame Check Sequence"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_imb_reverse_us","name":"TCPDFBarcode::imb_reverse_us","doc":"Reverse unsigned short value"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_imb_tables","name":"TCPDFBarcode::imb_tables","doc":"generate Nof13 tables used for Intelligent Mail Barcode"},
            
                    {"type":"Class","link":"TCPDF_COLORS.html","name":"TCPDF_COLORS","doc":"PHP color class for WarnockPDF"},
                                {"type":"Method","fromName":"TCPDF_COLORS","fromLink":"TCPDF_COLORS.html","link":"TCPDF_COLORS.html#method_getSpotColor","name":"TCPDF_COLORS::getSpotColor","doc":"Return the Spot color array."},
        {"type":"Method","fromName":"TCPDF_COLORS","fromLink":"TCPDF_COLORS.html","link":"TCPDF_COLORS.html#method_convertHTMLColorToDec","name":"TCPDF_COLORS::convertHTMLColorToDec","doc":"Returns an array (RGB or CMYK) from an html color name, or a six-digit (i.e. #3FE5AA), or three-digit (i.e. #7FF) hexadecimal color, or a javascript color array, or javascript color name."},
        {"type":"Method","fromName":"TCPDF_COLORS","fromLink":"TCPDF_COLORS.html","link":"TCPDF_COLORS.html#method_getColorStringFromArray","name":"TCPDF_COLORS::getColorStringFromArray","doc":"Convert a color array into a string representation."},
        {"type":"Method","fromName":"TCPDF_COLORS","fromLink":"TCPDF_COLORS.html","link":"TCPDF_COLORS.html#method__JScolor","name":"TCPDF_COLORS::_JScolor","doc":"Convert color to javascript color."},
            
                    {"type":"Class","link":"TCPDF_FONT_DATA.html","name":"TCPDF_FONT_DATA","doc":"Unicode data and encoding maps for WarnockPDF."},
                
                    {"type":"Class","link":"TCPDF_IMAGES.html","name":"TCPDF_IMAGES","doc":"Static image methods used by the TCPDF class."},
                                {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method_getImageFileType","name":"TCPDF_IMAGES::getImageFileType","doc":"Return the image type given the file name or array returned by getimagesize() function."},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method_setGDImageTransparency","name":"TCPDF_IMAGES::setGDImageTransparency","doc":"Set the transparency for the given GD image."},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method__toPNG","name":"TCPDF_IMAGES::_toPNG","doc":"Convert the loaded image to a PNG and then return a structure for the PDF creator."},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method__toJPEG","name":"TCPDF_IMAGES::_toJPEG","doc":"Convert the loaded image to a JPEG and then return a structure for the PDF creator."},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method__parsejpeg","name":"TCPDF_IMAGES::_parsejpeg","doc":"Extract info from a JPEG file without using the GD library."},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method__parsepng","name":"TCPDF_IMAGES::_parsepng","doc":"Extract info from a PNG file without using the GD library."},
            
                    {"type":"Class","link":"TCPDF_STATIC.html","name":"TCPDF_STATIC","doc":"Static methods used by the TCPDF class."},
                                {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTCPDFVersion","name":"TCPDF_STATIC::getTCPDFVersion","doc":"Return the current TCPDF version."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTCPDFProducer","name":"TCPDF_STATIC::getTCPDFProducer","doc":"Return the current TCPDF producer."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_isValidURL","name":"TCPDF_STATIC::isValidURL","doc":"Check if the URL exist."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_removeSHY","name":"TCPDF_STATIC::removeSHY","doc":"Removes SHY characters from text."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getBorderMode","name":"TCPDF_STATIC::getBorderMode","doc":"Get the border mode accounting for multicell position (opens bottom side of multicell crossing pages)"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_empty_string","name":"TCPDF_STATIC::empty_string","doc":"Determine whether a string is empty."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getObjFilename","name":"TCPDF_STATIC::getObjFilename","doc":"Returns a temporary filename for caching object on filesystem."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__escape","name":"TCPDF_STATIC::_escape","doc":"Add \"\\\" before \"\\\", \"(\" and \")\""},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__escapeXML","name":"TCPDF_STATIC::_escapeXML","doc":"Escape some special characters (&lt; &gt; &amp;) for XML output."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_objclone","name":"TCPDF_STATIC::objclone","doc":"Creates a copy of a class object"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_sendOutputData","name":"TCPDF_STATIC::sendOutputData","doc":"Output input data and compress it if possible."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_replacePageNumAliases","name":"TCPDF_STATIC::replacePageNumAliases","doc":"Replace page number aliases with number."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTimestamp","name":"TCPDF_STATIC::getTimestamp","doc":"Returns timestamp in seconds from formatted date-time."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getFormattedDate","name":"TCPDF_STATIC::getFormattedDate","doc":"Returns a formatted date-time."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getRandomSeed","name":"TCPDF_STATIC::getRandomSeed","doc":"Returns a string containing random data to be used as a seed for encryption methods."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__md5_16","name":"TCPDF_STATIC::_md5_16","doc":"Encrypts a string using MD5 and returns it's value as a binary string."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__AES","name":"TCPDF_STATIC::_AES","doc":"Returns the input text encrypted using AES algorithm and the specified key."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__AESnopad","name":"TCPDF_STATIC::_AESnopad","doc":"Returns the input text encrypted using AES algorithm and the specified key."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__RC4","name":"TCPDF_STATIC::_RC4","doc":"Returns the input text encrypted using RC4 algorithm and the specified key."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getUserPermissionCode","name":"TCPDF_STATIC::getUserPermissionCode","doc":"Return the permission code used on encryption (P value)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_convertHexStringToString","name":"TCPDF_STATIC::convertHexStringToString","doc":"Convert hexadecimal string to string"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_convertStringToHexString","name":"TCPDF_STATIC::convertStringToHexString","doc":"Convert string to hexadecimal string (byte string)"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getEncPermissionsString","name":"TCPDF_STATIC::getEncPermissionsString","doc":"Convert encryption P value to a string of bytes, low-order byte first."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_encodeNameObject","name":"TCPDF_STATIC::encodeNameObject","doc":"Encode a name object."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getAnnotOptFromJSProp","name":"TCPDF_STATIC::getAnnotOptFromJSProp","doc":"Convert JavaScript form fields properties array to Annotation Properties array."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_formatPageNumber","name":"TCPDF_STATIC::formatPageNumber","doc":"Format the page numbers."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_formatTOCPageNumber","name":"TCPDF_STATIC::formatTOCPageNumber","doc":"Format the page numbers on the Table Of Content."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_extractCSSproperties","name":"TCPDF_STATIC::extractCSSproperties","doc":"Extracts the CSS properties from a CSS string."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_fixHTMLCode","name":"TCPDF_STATIC::fixHTMLCode","doc":"Cleanup HTML code (requires HTML Tidy library)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_isValidCSSSelectorForTag","name":"TCPDF_STATIC::isValidCSSSelectorForTag","doc":"Returns true if the CSS selector is valid for the selected HTML tag"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getCSSdataArray","name":"TCPDF_STATIC::getCSSdataArray","doc":"Returns the styles array that apply for the selected HTML tag."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTagStyleFromCSSarray","name":"TCPDF_STATIC::getTagStyleFromCSSarray","doc":"Compact CSS data array into single string."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_intToRoman","name":"TCPDF_STATIC::intToRoman","doc":"Returns the Roman representation of an integer number"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_revstrpos","name":"TCPDF_STATIC::revstrpos","doc":"Find position of last occurrence of a substring in a string"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getHyphenPatternsFromTEX","name":"TCPDF_STATIC::getHyphenPatternsFromTEX","doc":"Returns an array of hyphenation patterns."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getPathPaintOperator","name":"TCPDF_STATIC::getPathPaintOperator","doc":"Get the Path-Painting Operators."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTransformationMatrixProduct","name":"TCPDF_STATIC::getTransformationMatrixProduct","doc":"Get the product of two SVG tranformation matrices"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getSVGTransformMatrix","name":"TCPDF_STATIC::getSVGTransformMatrix","doc":"Get the tranformation matrix from SVG transform attribute"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getVectorsAngle","name":"TCPDF_STATIC::getVectorsAngle","doc":"Returns the angle in radiants between two vectors"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_pregSplit","name":"TCPDF_STATIC::pregSplit","doc":"Split string by a regular expression."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_fopenLocal","name":"TCPDF_STATIC::fopenLocal","doc":"Wrapper to use fopen only with local files"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_url_exists","name":"TCPDF_STATIC::url_exists","doc":"Check if the URL exist."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_encodeUrlQuery","name":"TCPDF_STATIC::encodeUrlQuery","doc":"Encode query params in URL"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_file_exists","name":"TCPDF_STATIC::file_exists","doc":"Wrapper for file_exists."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_fileGetContents","name":"TCPDF_STATIC::fileGetContents","doc":"Reads entire file into a string."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getULONG","name":"TCPDF_STATIC::_getULONG","doc":"Get ULONG from string (Big Endian 32-bit unsigned integer)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getUSHORT","name":"TCPDF_STATIC::_getUSHORT","doc":"Get USHORT from string (Big Endian 16-bit unsigned integer)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getSHORT","name":"TCPDF_STATIC::_getSHORT","doc":"Get SHORT from string (Big Endian 16-bit signed integer)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getFWORD","name":"TCPDF_STATIC::_getFWORD","doc":"Get FWORD from string (Big Endian 16-bit signed integer)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getUFWORD","name":"TCPDF_STATIC::_getUFWORD","doc":"Get UFWORD from string (Big Endian 16-bit unsigned integer)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getFIXED","name":"TCPDF_STATIC::_getFIXED","doc":"Get FIXED from string (32-bit signed fixed-point number (16.16)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getBYTE","name":"TCPDF_STATIC::_getBYTE","doc":"Get BYTE from string (8-bit unsigned integer)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_rfread","name":"TCPDF_STATIC::rfread","doc":"Binary-safe and URL-safe file read."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__freadint","name":"TCPDF_STATIC::_freadint","doc":"Read a 4-byte (32 bit) integer from file."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getPageSizeFromFormat","name":"TCPDF_STATIC::getPageSizeFromFormat","doc":"Get page dimensions from format name."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_setPageBoxes","name":"TCPDF_STATIC::setPageBoxes","doc":"Set page boundaries."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_swapPageBoxCoordinates","name":"TCPDF_STATIC::swapPageBoxCoordinates","doc":"Swap X and Y coordinates of page boxes (change page boxes orientation)."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getPageLayoutMode","name":"TCPDF_STATIC::getPageLayoutMode","doc":"Get the canonical page layout mode."},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getPageMode","name":"TCPDF_STATIC::getPageMode","doc":"Get the canonical page layout mode."},
            
                                // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Doctum = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Doctum.injectApiTree($('#api-tree'));
    });

    return root.Doctum;
})(window);

$(function() {

    
    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Doctum.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


