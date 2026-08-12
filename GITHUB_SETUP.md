# GitHub에 저장하고 공개하는 방법

이 폴더는 아직 Git 저장소가 아닙니다. 아래 방법 중 하나를 선택하세요.

## 가장 쉬운 방법: GitHub Desktop

1. GitHub 계정을 만들고 `https://desktop.github.com`에서 GitHub Desktop을 설치합니다.
2. GitHub Desktop에서 **File → Add local repository**를 누릅니다.
3. 이 폴더를 선택합니다.
   `C:\Users\안녕하세요\Documents\Codex\2026-08-12\new-chat-2\outputs\busan-sea-trip`
4. 저장소가 아니라고 나오면 **create a repository**를 누릅니다.
5. 저장소 이름을 `busan-sea-trip`으로 지정하고 **Create repository**를 누릅니다.
6. 왼쪽 아래 Summary에 `첫 버전 저장`을 입력하고 **Commit to main**을 누릅니다.
7. 상단 **Publish repository**를 누릅니다. 공개하고 싶지 않으면 **Keep this code private**를 체크합니다.

이후 파일을 수정할 때마다 GitHub Desktop에서 변경 내용을 확인하고 **Commit to main → Push origin**을 누르면 GitHub에 저장됩니다.

## 명령어로 저장하는 방법

GitHub에서 먼저 `busan-sea-trip`이라는 빈 저장소를 만듭니다. README, .gitignore, 라이선스는 추가하지 않은 빈 저장소가 편합니다.

PowerShell에서 다음 명령을 한 줄씩 실행합니다.

```powershell
cd "C:\Users\안녕하세요\Documents\Codex\2026-08-12\new-chat-2\outputs\busan-sea-trip"
git init -b main
git add .
git commit -m "첫 버전 저장"
git remote add origin https://github.com/내아이디/busan-sea-trip.git
git push -u origin main
```

`내아이디`는 실제 GitHub 사용자명으로 바꿔야 합니다.

## GitHub Pages로 웹페이지 공개하기

1. GitHub 저장소에서 **Settings → Pages**로 이동합니다.
2. **Build and deployment**의 Source를 **Deploy from a branch**로 선택합니다.
3. Branch를 `main`, 폴더를 `/(root)`로 선택하고 Save를 누릅니다.
4. 잠시 기다리면 `https://내아이디.github.io/busan-sea-trip/` 주소가 생성됩니다.
5. 이 주소를 카카오디벨로퍼스 앱의 JavaScript 키 웹 도메인에도 등록합니다.

## API 키 주의사항

- 현재 앱은 카카오 JavaScript 키를 브라우저 저장소에만 저장하므로 GitHub 파일에는 들어가지 않습니다.
- REST API 키, Admin 키, 비밀번호는 절대로 GitHub에 올리지 마세요.
- 카카오 JavaScript 키에는 허용할 웹 도메인을 정확히 등록하세요.
