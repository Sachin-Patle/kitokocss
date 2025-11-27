# Script de compilation KitokoCSS
# Utilisez: .\build.ps1

Write-Host "🔨 Compilation de KitokoCSS..." -ForegroundColor Cyan

# Vérifier si Sass est installé
$sassInstalled = Get-Command sass -ErrorAction SilentlyContinue

if (-not $sassInstalled) {
    Write-Host "⚠️  Sass n'est pas installé. Installation..." -ForegroundColor Yellow
    npm install sass --save-dev
}

# Compiler le CSS
Write-Host "📦 Compilation du CSS..." -ForegroundColor Green
sass src/main.scss dist/kitoko.css --style=expanded
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ kitoko.css créé avec succès!" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors de la compilation" -ForegroundColor Red
    exit 1
}

# Compiler le CSS minifié
Write-Host "📦 Compilation du CSS minifié..." -ForegroundColor Green
sass src/main.scss dist/kitoko.min.css --style=compressed
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ kitoko.min.css créé avec succès!" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors de la compilation minifiée" -ForegroundColor Red
    exit 1
}

Write-Host "🎉 Compilation terminée!" -ForegroundColor Green

