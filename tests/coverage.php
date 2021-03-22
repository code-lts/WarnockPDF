<?php

if (extension_loaded('pcov')) {
    \pcov\start();


class ____CoverageObject {

    public function __destruct()
    {
        \pcov\stop();
        $rootDir = realpath(dirname(__FILE__) . '/../') . '/';
        $coverageFile = $rootDir . 'tests/coverage.lcov';
        $covData = \pcov\collect(\pcov\exclusive, array(
            __FILE__
        ));
        $coverageData = '';
        foreach ($covData as $file => $coverageForFile) {
            $coverageData .= 'SF:' . $file . "\n";
            $coverageData .= 'TN:' . str_replace($rootDir, '', $_SERVER['PHP_SELF']) . "\n";
            foreach ($coverageForFile as $line => $coverageValue) {
                $coverageValue = $coverageValue === -1 ? 0 : $coverageValue;
                $coverageData .= 'DA:' . $line . ',' . $coverageValue . "\n";
            }
            $coverageData .= 'end_of_record' . "\n";
        }
        file_put_contents($coverageFile, $coverageData, LOCK_EX | FILE_APPEND);
    }
}

$a = new ____CoverageObject();

}
