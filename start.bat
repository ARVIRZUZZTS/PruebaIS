@echo off
echo Corrigiendo .env...
powershell -Command "$(Get-Content .env -Raw) -replace \"`r`n\", \"`n\" | Set-Content .env -NoNewline"
echo ✓ .env corregido

echo Levantando Docker...
docker compose up --build