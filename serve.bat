@echo off
REM Serve current directory on port 8000 using Python if available, otherwise try Node
python -m http.server 8000 --directory .
IF %ERRORLEVEL% NEQ 0 (
  echo Python not found or failed; trying Node server.js
  node server.js 8000
)
