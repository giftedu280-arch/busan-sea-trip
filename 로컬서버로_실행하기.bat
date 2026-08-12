@echo off
chcp 65001 > nul
cd /d "%~dp0"
echo 마! 어데가노 머먹노? 로컬 서버를 시작합니다.
echo 브라우저 주소: http://localhost:8000
start "" "http://localhost:8000"
"C:\Users\안녕하세요\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 8000
pause
