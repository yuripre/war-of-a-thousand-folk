#!/bin/sh
# Monta o jogo em um único index.html a partir dos módulos em src/ (ordem alfabética).
cd "$(dirname "$0")" && cat src/*.html > index.html && echo "index.html: $(wc -c < index.html) bytes"
