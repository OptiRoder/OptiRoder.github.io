# 1. Verificar permisos de Administrador (Necesario para escribir en C:\)
if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "Por favor, ejecuta este script como ADMINISTRADOR." -ForegroundColor Red
    Start-Sleep -Seconds 5
    exit
}

# 2. Definir rutas
$zipUrl = "https://github.com/OptiRoder/OptiRoder.github.io/releases/download/v2.0.0/ToolKit.zip"
$destino = "C:\ToolKit"
$zipFinal = "$env:TEMP\OptiRoder.zip" # Nombre único temporal

# 3. Descargar el zip
Write-Host "Descargando instalador..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $zipUrl -OutFile $zipFinal

# 4. Descomprimir (Forzamos la eliminación de la carpeta antigua si existe)
Write-Host "Instalando en $destino ..." -ForegroundColor Cyan
if (Test-Path $destino) { Remove-Item -Path $destino -Recurse -Force }
Expand-Archive -Path $zipFinal -DestinationPath $destino -Force

# 5. Limpiar archivo temporal (Borramos el zip)
Remove-Item -Path $zipFinal -Force

# 6. Ejecutar el programa principal
$archivoEjecutable = "$destino\ToolKit\OptiRoder-Toolkit.ps1"
if (Test-Path $archivoEjecutable) {
    Write-Host "Iniciando ToolKit..." -ForegroundColor Green
    # Usamos powershell.exe para asegurar que el script se ejecute correctamente
    powershell.exe -ExecutionPolicy Bypass -File $archivoEjecutable
} else {
    Write-Host "Error: No se encontró el archivo principal en $archivoEjecutable" -ForegroundColor Red
    Read-Host "Presiona Enter para cerrar..."
}
