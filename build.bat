@echo off
echo 🔨 Compilation de KitokoCSS...
echo.

REM Vérifier si node_modules existe
if not exist "node_modules" (
    echo ⚠️  Installation des dependances...
    call npm install
)

REM Compiler le CSS
echo 📦 Compilation du CSS...
call npx sass src/main.scss dist/kitoko.css --style=expanded
if %ERRORLEVEL% EQU 0 (
    echo ✅ kitoko.css créé avec succès!
) else (
    echo ❌ Erreur lors de la compilation
    pause
    exit /b 1
)

REM Compiler le CSS minifié
echo 📦 Compilation du CSS minifié...
call npx sass src/main.scss dist/kitoko.min.css --style=compressed
if %ERRORLEVEL% EQU 0 (
    echo ✅ kitoko.min.css créé avec succès!
) else (
    echo ❌ Erreur lors de la compilation minifiée
    pause
    exit /b 1
)

echo.
echo 🎉 Compilation terminée!
pause

