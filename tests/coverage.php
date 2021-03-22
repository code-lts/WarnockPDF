<?php

if (extension_loaded('pcov')) {
    \pcov\start();


class ____CoverageObject {

    public function __destruct()
    {
        \pcov\stop();
        $coverageFile = dirname(__FILE__) . '/coverage.lcov';
        $covData = \pcov\collect(\pcov\exclusive, array(
            __FILE__
        ));
        $coverageData = '';
        foreach ($covData as $file => $coverageForFile) {
            $coverageData .= 'SF:' . $file . "\n";
            $coverageData .= 'TN:' . $_SERVER['PHP_SELF'] . "\n";
            foreach ($coverageForFile as $line => $coverageValue) {
                $coverageData .= 'DA:' . $line . ',' . $coverageValue . "\n";
            }
            $coverageData .= 'end_of_record' . "\n";
        }
        file_put_contents($coverageFile, $coverageData, LOCK_EX | FILE_APPEND);
    }
}

$a = new ____CoverageObject();

}
