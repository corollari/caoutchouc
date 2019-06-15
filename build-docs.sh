#!/usr/bin/env sh
set -ev
cd docs
pandoc -t html -f markdown+lists_without_preceding_blankline+hard_line_breaks-blank_before_header --css "pandoc.css" -s index.md -o index.html -V header-includes:"<link rel='shortcut icon' href='favicon.png' />" --fail-if-warnings
