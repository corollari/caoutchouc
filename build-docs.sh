#!/usr/bin/env sh
set -ev
cd docs
pandoc -t html --css "pandoc.css" -s -M title="Caoutchouc" -V title:"" index.md -o index.html -V header-includes:"<link rel='shortcut icon' href='favicon.png' />" --fail-if-warnings
