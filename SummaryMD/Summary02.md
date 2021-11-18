# 2021118 TIL 정리 - React

## 1. React 기본 예제

### a. App.js 간단설명

 ![image](https://user-images.githubusercontent.com/84966961/142424944-8e3d4bc9-8a80-459e-88c0-be4b1a7f7374.png)

 js 문법과 비슷함. 단, html이 아닌 jsx 라는 문법을 사용하며 js의 함수에서 리턴 값에 직접 html 태그를 사용하여 작성할 수 있음.

 `class` 라는 속성을 사용할 수 없는 데, 그 이유는 js에는 `class` 라는 명령어가 예약되어 있기 때문이며 className이라는 속성으로 태그에 넣을 수 있음. 
    
 <br>
<hr>

### b. React, Vue, Angular 를 사용하는 이유    
 -> **데이터 바인딩**이 쉬움.    
 
 기존 js에서의 데이터 바인딩은 다음과 같이 했어야함.
 
 ```
 document.getElementById().innerHTML = ''
 ```
 
 하지만 다음과 같이 중괄호`{ 변수명 }`를 사용하여 쉽게 데이터 바인딩이 가능함.    
 
 ![image](https://user-images.githubusercontent.com/84966961/142426935-0bfe78f9-e9b8-4c70-9db8-589cab7d9c7c.png)

 변수에 함수를 넣어도 동적으로 변경 가능함.
    
 ![image](https://user-images.githubusercontent.com/84966961/142429655-7dc067a4-9c7e-4bea-b75a-f1989f75aa2b.png)
   
 이미지를 import 하여 중괄호 내부에 넣어주어 img 태그를 사용할 수도 있음.    
    
 ![image](https://user-images.githubusercontent.com/84966961/142430069-7dd8e49e-eccd-4eee-9f2f-db08a1534b17.png)

 심지어는 className 에도 중괄호를 이용하여 변수를 사용할 수 있음.
    
 ![image](https://user-images.githubusercontent.com/84966961/142430514-ef8ff1cc-1de3-4c1e-a40c-2b254829dabf.png)

 단, style 속성을 지정하고 싶을 떄는 object 자료형으로 만들어 넣어야한다. 직접 넣어도 되지만(`{{color:'blue'}}`) 다음과 같이 변수에 담아 넣어도 가능하다.    
 
 ![image](https://user-images.githubusercontent.com/84966961/142431387-b03d5b23-f880-46ae-a852-e5b175c04bed.png)
 ![image](https://user-images.githubusercontent.com/84966961/142432111-5c9dc66e-586e-41c4-bc87-0ba314b9c650.png)

 

<br>