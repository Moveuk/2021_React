# 2021118 TIL 정리 - React

## 1. React 환경 구성

### a. Node JS 설치

 Node JS 검색 및 최신 버전 설치
 
 ![image](https://user-images.githubusercontent.com/84966961/142355972-0ca72fdd-e141-4ec2-b6fc-056f3c2c14cc.png)

```
설치하는 이유

npm 툴을 사용하여 create-react-app 라이브러리 사용하기 위함.
```

### b. Visual Studio Code 설치

 코딩에 사용할 에디터 설치

![image](https://user-images.githubusercontent.com/84966961/142356035-15ed0de2-e06b-4ec7-a811-291399cd4e59.png)

### c. React를 위한 프로젝트 구성

 VS Code를 실행 후 코드짤 폴더를 선택하여 file 탭 > Open folder를 사용하여 지정해줌.   
  
![image](https://user-images.githubusercontent.com/84966961/142356329-a9971244-dc59-4377-8e19-177719f1534f.png)

 <br>
   
 터미널 창 open.
 
  - 아래 파란색 부분과 검정부분의 사이에 커서를 올리고 드래그하여 터미널 여는 방법
   ![image](https://user-images.githubusercontent.com/84966961/142356538-7964be2e-175f-459f-9a6c-d7cee46a5f16.png)
  - 터미널 `Ctrl + \`` 버튼을 눌러 여는 방법
   ![image](https://user-images.githubusercontent.com/84966961/142356626-8503696f-57fe-4964-8726-17e1831afdb0.png)   

 <br>

 다음과 같이 터미널 창에 입력하면 `blog`란 이름의 프로젝트가 생성됨. 
 
 - npx : nodejs 설치 후 자동으로 라이브러리 설치해주는 명령어
 - create-react-app : 리액트 세팅이 완료된 boilerplate 프로젝트를 생성해주는 라이브러리 명령어
 - blog : 프로젝트명 선언
 
 ![image](https://user-images.githubusercontent.com/84966961/142356784-7fa51c38-fbd1-4b30-811c-ccb17703a0bd.png)

```
boilerplate
 철강 제조 부분에서 유래된 말로 보일러 내부에 들어가는 압연 강판을 말한다.
 IT 분야에서는 재사용이 가능하고 단단한 압연 강판에 빗대어 변경없이 재사용할 수 있는 저작품이라는 뜻으로 사용된다.
```

<br>

 boilerplate 프로젝트 완성!    
 <br>
 
 src 폴더의 `App.js` 파일이 기존 웹 프로젝트에서의 `index.html` 파일과 같다고 보면됨(실제 html 파일은 public 폴더 내부에 존재).
    
 ![image](https://user-images.githubusercontent.com/84966961/142357430-c0747b5f-11fa-431d-85f0-038315c0faa4.png)

## 2. 미리보기 띄우는 방법

 터미널 창에서 루트 주소 상태가 `blog(본인이 설정한 프로젝트명)` 인지 확인후 `npm start`라고 입력한다.
 
![image](https://user-images.githubusercontent.com/84966961/142357705-608ee42a-de75-4bf1-8e7d-35ac871e173a.png)

 - 에러 발견
  최신 nodeJS 사용시 다음과 같은 에러가 발생함. 
  nvm(Node Version Manager)를 사용하여 16 버전으로 다운그레이드하거나 다음과 같이 `package.json` 파일에서 start 명령어를 변경해주면 된다. 

![image](https://user-images.githubusercontent.com/84966961/142358815-81990e3f-f496-421f-82dd-544f300ed49f.png)

 해당 옵션이 뭔가 하여 찾아보니 다음과 같다.  
 
![image](https://user-images.githubusercontent.com/84966961/142359008-58247cc1-54c7-4241-9efb-1fada29bc345.png)

```
OpenSSL
 OpenSSL 은 데이터통신을 위한 TLS, SSL 프로토콜을 이용할 수 있는 오픈소스 라이브러리이다.

 SSL(Secure Sockets Layer, 보안 소켓 계층)을 사용한 대표적인 통신 방식이 웹기반의 https이며 
 
 서버가 CA(Certificate Authority) 기관에게 신원을 보장할 수 있는 디지털 인증서(ssl 통신에서 필수적 요소)를 요청하고 대칭키와 비대칭키 방식을 혼용하여
 
 안전한 사이트임을 공인해주는 방식이다.
```


 실행 완료!
 
 ![image](https://user-images.githubusercontent.com/84966961/142359189-d203aa81-1fed-4239-a46c-cbb462f0ef05.png)   
 ![image](https://user-images.githubusercontent.com/84966961/142361628-6fb86a65-1d50-43d0-8626-914c66fb706a.png)

<br>
<hr>

- 번외 : nvm 설치
 https://github.com/coreybutler/nvm-windows/releases 이동 후 nvm 선택하여 설치.

![image](https://user-images.githubusercontent.com/84966961/142360508-037646a3-7ed7-4ea7-aec4-f38800962a9f.png)

 본인은 nvm-setup.zip 받아 exe 파일 실행 후 설치함.
 
- 설치된 nvm 버전 확인
 
 ![image](https://user-images.githubusercontent.com/84966961/142360668-e8a589b7-20f2-47fd-8c90-75dd91fe30dc.png)

- 설치할 당시 17.1 버전을 관리할 것인지 물어보는 창이 떴고 ok 눌르니 `nvm ls` 명령어 입력 후 nvm이 해당 버전을 관리중인 것을 확인할 수 있음   
![image](https://user-images.githubusercontent.com/84966961/142360860-2a6911d9-d3f4-4700-add7-0fd3493d34fb.png)

- 만약 다른 version을 설치하여 사용하고 싶다면 다음 명령어를 사용하면 된다.
 설치가능한 버전은 이 주소에서 확인 가능.
 https://nodejs.org/ko/download/releases/
 
   ![image](https://user-images.githubusercontent.com/84966961/142361104-2eedbba3-2aef-4111-aa99-de7e95773e34.png)

- node 버전 활성화 방법
 사용 가능한 버전이 2개며 `use`를 이용하여 활성화 시킨다.

![image](https://user-images.githubusercontent.com/84966961/142361176-0b010e07-9b86-48e7-9c89-f3044d727172.png)


<br><hr>

## 3. 구동 원리

 - App.js 에 index.html 에 들어갈 내용을 함수를 이용하여 return 하며 index.js 가 실제로 html 파일에 내용을 뿌려주는 역할을 함.

![image](https://user-images.githubusercontent.com/84966961/142362224-0961be1b-065c-4a04-b396-6c278dcde5e3.png)

 - node_modules 폴더
 프로젝트에 필요한 각종 라이브러리를 모아둔 폴더

 - public 폴더
 static 파일 보관함(빌드 후 컴파일 되지 않고 (압축되지 않은 상태로) 존재하는 파일들)
 
 - src 폴더
 소스코드 보관함

 - packace.json
 설치한 라이브러리 목록이라고 생각하면 됨.


