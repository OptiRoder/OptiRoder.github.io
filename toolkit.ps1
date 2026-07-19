# 1. Definir rutas
$zipUrl  = "https://github.com/OptiRoder/OptiRoder.github.io/releases/latest/download/ToolKit.zip"
$destino = "$env:TEMP\ToolKit"
$zipFinal = "$env:TEMP\OptiRoder.zip"

# 2. Descargar el zip
Write-Host "Descargando instalador..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $zipUrl -OutFile $zipFinal

# 3. Descomprimir (elimina carpeta anterior si existe)
Write-Host "Instalando en $destino ..." -ForegroundColor Cyan
if (Test-Path $destino) { Remove-Item -Path $destino -Recurse -Force }
Expand-Archive -Path $zipFinal -DestinationPath $destino -Force

# 4. Limpiar zip temporal
Remove-Item -Path $zipFinal -Force

# 5. Ejecutar el programa principal
$archivoExe = "$destino\OptiRoder-Toolkit.exe"
$archivoPs1 = "$destino\OptiRoder-Toolkit.ps1"

if (Test-Path $archivoExe) {
    Write-Host "Iniciando ToolKit..." -ForegroundColor Green
    Start-Process $archivoExe
} elseif (Test-Path $archivoPs1) {
    Write-Host "Iniciando ToolKit..." -ForegroundColor Green
    powershell.exe -NoProfile -ExecutionPolicy Bypass -STA -File $archivoPs1
} else {
    Write-Host "Error: No se encontro el archivo principal (OptiRoder-Toolkit.exe o OptiRoder-Toolkit.ps1) en $destino" -ForegroundColor Red
    Read-Host "Presiona Enter para cerrar..."
}
