#!/bin/sh
# Convierte .env a LF si existe
if [ -f .env ]; then
  sed -i 's/\r//' .env
fi

# Si no existe .env, lo crea desde el ejemplo
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Se creo .env desde .env.example, rellena las credenciales"
  exit 1
fi

docker compose up --build