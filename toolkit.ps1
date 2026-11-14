# =============================================================================
#  TorkeToolkit Pro - Instalador / Lanzador Rápido de PowerShell
#  irm https://optiroder.github.io/toolkit.ps1 | iex
# =============================================================================

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$zipUrl   = "https://github.com/OptiRoder/OptiRoder.github.io/releases/latest/download/ToolKit.zip"
$destino  = "$env:TEMP\TorkeToolkit"
$zipFinal = "$env:TEMP\TorkeToolkit.zip"

Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host "   TorkeToolkit Pro - Descargando suite de optimización..." -ForegroundColor Cyan
Write-Host "=========================================================" -ForegroundColor Cyan

Invoke-WebRequest -Uri $zipUrl -OutFile $zipFinal

Write-Host "Extrayendo en $destino ..." -ForegroundColor Cyan
if (Test-Path $destino) { Remove-Item -Path $destino -Recurse -Force }
Expand-Archive -Path $zipFinal -DestinationPath $destino -Force

Remove-Item -Path $zipFinal -Force -ErrorAction SilentlyContinue

$archivoExe = "$destino\TorkeToolkit-Pro.exe"
if (-not (Test-Path $archivoExe)) { $archivoExe = "$destino\OptiRoder-Toolkit.exe" }
$archivoPs1 = "$destino\OptiRoder-Toolkit.ps1"

if (Test-Path $archivoExe) {
    Write-Host "Iniciando TorkeToolkit Pro..." -ForegroundColor Green
    Start-Process $archivoExe
} elseif (Test-Path $archivoPs1) {
    Write-Host "Iniciando TorkeToolkit Pro..." -ForegroundColor Green
    powershell.exe -NoProfile -ExecutionPolicy Bypass -STA -File $archivoPs1
} else {
    Write-Host "Error: No se encontró el ejecutable principal en $destino" -ForegroundColor Red
    Read-Host "Presiona Enter para cerrar..."
}
