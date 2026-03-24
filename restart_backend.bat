@echo off
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
cd /d c:\Users\HP\OneDrive\Desktop\FUTURE_FS_01\backend
node server.js

