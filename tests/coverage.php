<?php

if (extension_loaded('pcov')) {
    \pcov\start();


class ____CoverageObject {

    public function __destruct()
    {
        \pcov\stop();
        $coverageFile = dirname(__FILE__) . '/coverage.json';
        $coverage = [];
        if (file_exists($coverageFile)) {
            $coverage = json_decode(file_get_contents($coverageFile));
        }
        $covData = \pcov\collect(\pcov\exclusive, [
            __FILE__
        ]);
        $coverage[] = [
            'run_end' => time(),
            'data' => $covData,
        ];
        file_put_contents($coverageFile, json_encode($coverage, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
    }
}

$a = new ____CoverageObject();

}
