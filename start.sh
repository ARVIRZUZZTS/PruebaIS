#!/bin/sh
# Corrige saltos de linea automaticamente
sed -i 's/\r//' .env 2>/dev/null
echo "✓ .env corregido"

# Carga las variables
export $(grep -v '^#' .env | xargs)

# Levanta docker
docker compose up --build