<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

$rootDir = __DIR__ . '/../';

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->notPath('cache')
    ->notPath('build')
    ->notPath('fonts')
    ->notPath('vendor')
    ->notPath('tests')
    ->notPath('examples')
    ->notName('tcpdf_font_data.php')
    ->in($rootDir);

return new Doctum($iterator, [
    'title'                => 'WarnockPDF',
    'build_dir'            => $rootDir . '/build',
    'cache_dir'            => $rootDir . '/cache',
    'source_dir'           => $rootDir,
    'remote_repository'    => new GitHubRemoteRepository('code-lts/warnockpdf', $rootDir),
]);
