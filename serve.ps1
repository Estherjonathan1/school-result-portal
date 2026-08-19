param(
  [int]$Port = 8000
)
try {
  python -m http.server $Port --directory .
} catch {
  Write-Host "Python failed or not found — falling back to Node"
  node server.js $Port
}
