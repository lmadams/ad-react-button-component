#!/usr/bin/env bash

echo "### Construindo documentação ###"

# Encontra todos os arquivos .md e concatena em um só... o README.md
find src/ -name '*.md' -print0|xargs -0 -n 1 cat > README.md

echo ""
echo "### => README.md completed. ###"