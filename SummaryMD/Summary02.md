# 2021118~19 TIL 정리 - React

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

### ✨ jsx에서 emmet 사용

 jsx에서 emmet을 default 에서는 사용못하는 것을 확인하여 에디터의 기능을 통해 사용 가능하도록 설정해 주었음.
 
 `Ctrl + ,`(Settings 단축키) > Workspace 탭 > 위 검색창에 `include languages` 검색 > javascript : javascriptreact 추가
    
 위 과정을 통해서 js 문서 내에 emmet 사용이 가능해진다.
    
 ![image](https://user-images.githubusercontent.com/84966961/142526112-44ef0d61-11cd-4de0-9f06-1cf5d7118e01.png)
    
 설정하게 되면 프로젝트 내부에 vscode > settings.json 이 생긴다.
    
 ![image](https://user-images.githubusercontent.com/84966961/142528267-8b06f4aa-c0e7-4b5f-9cdf-375ed36ab831.png)

    
    
<br>
<hr>


### c. state를 사용하여 변수 데이터바인딩 하기

 useState 사용 전 import 필요.
 
 useState('변수')는 `[a,b]`라는 어레이를 생성하고 변수는 a의 값에 지정됨.
 
 a는 state 데이터, b는 state 데이터 변경 함수 임.
 
 JS ES6에서 추가된 새로운 문법인 destructuring으로 각 배열의 값을 변수에 직접 지정 가능.
 
 ```
  var [a,b] = [10,100]; 
 ```
 
 a는 10이며 b는 100임.
    

![image](https://user-images.githubusercontent.com/84966961/142532872-6f0a3eaf-0baf-4a31-8867-0462ae699128.png)
   
   <br>
   <hr>
   
**state에 array, object 삽입 가능**

 array를 글자로 변환하다보니 다음과 같이 붙어서 나옴.
 
 또한, index 지정만 해주면 각각 나올수 있음.

![image](https://user-images.githubusercontent.com/84966961/142536499-5220394e-6114-4551-8159-28b0c2f4dd33.png)   
![image](https://user-images.githubusercontent.com/84966961/142537176-8d2d39ba-3f99-4594-a8d7-42109703d668.png)   

   <br>
   <hr>
   
### ✨ state 사용하는 이유

 -> 변수는 데이터 변경시 html 렌더링이 되지 않고 새로고침을 해야지만 데이터가 변경됨.
 하지만, state는 state 데이터가 변경이되면 html이 렌더링되며 화면이 바뀜. 이는 web-app으로서 역할을 하도록 자연스럽게 바뀌도록 해줌.
    
마치, ajax로 비동기 처리하는 방식인듯함!?   
   
홈페이지의 상단 제목과 같은 변경이 적은 부분들은 state를 사용할 필요가 없으며 정렬, 수정 등을 통하여 변경이 잦은 부분들, 중요한 데이터들을 state에 저장하여 사용할 수 있도록 하자.<br>

   <br>
   <hr>
   
### array.map 사용하여 list 만들기

map은 array에 들어있는 함수이며 기본형은 다음과 같다.

```
const numbers = [1]; 

numbers.map((number, index, source) => { 

 // number: 요소값 
 // index: source에서 요소의 index
 // source: 순회하는 대상 
 
 console.log(number); // 1 
 console.log(index); // 0 
 console.log(source); // [1] 
 
 return number * number; });
```

![image](https://user-images.githubusercontent.com/84966961/142551593-bda2838a-736f-474e-abe7-b741afdf56c7.png)


이것 외에도 다른 함수를 만들어 중괄호 안에 함수를 호출하여 div를 생성해내는 방법도 있으나 가독성이 떨어지고 불편하므로 map을 사용하여 만들었다.


   <br>
   <hr>
   
### 클릭 이벤트 리스너

기존 JS 에서는 `onclick` 혹은 `addeventlistener`를 사용해서 이벤트 리스너를 사용했다.

![image](https://user-images.githubusercontent.com/84966961/142576987-578d4611-53eb-4cbf-8823-4717280af72f.png)


중괄호 {} 내부에는 `1+1`이런 식의 직접적인 계산식이 아닌 함수를 넣어서 사용해야한다.
   
전통적인 `function 함수() {}` 방식을 사용하거나 `() => {}` 를 사용하여 함수식을 작성하면 된다.
   
useState의 방식을 사용하여 좋아요 버튼 클릭시 옆의 숫자가 올라가도록 하였는데 배열의 state데이터 값과 state 변경 데이터 함수를 사용하여 만들어 주었다. state의 장점은 재렌더링을 사용하여 화면이 바뀐다는 점이며 state 데이터가 변경될 때 화면의 재렌더링이 일어나게 된다.
   
단, 지금의 경우에는 따봉 클릭시 동시에 숫자가 올라가 버린다.

![image](https://user-images.githubusercontent.com/84966961/142581702-306cfdb4-094d-42ca-85f2-1b355e3149ce.png)

![image](https://user-images.githubusercontent.com/84966961/142581908-bdb90791-19f4-4b23-9346-9104ba30e725.png)


   <br>
   <hr>
   
### state 배열 변경 방식

 직접 배열을 변경하는 것이 아니라 배열을 복사하여 값을 변경한 후 state데이터 변경 함수에 넣어 값을 변경한다.
 
 단, 이 때 reference data type의 채로 공유하여 복사하는 것이 아니라 `...` spread operator를 사용하여 deep copy하여 변경한다.
 
 ```
 var newArray = titles; // 배열의 복사지만 이것은 그냥 참조형 데이터 공유일뿐임.
 
 ||
 \/
 
 var newArray = [...titles]; // ... : spread operator (ES6 문법) : 해당 값의 중괄호 대괄호를 벗겨서 데이터 반환.
```

![image](https://user-images.githubusercontent.com/84966961/142586429-edb6e6be-24c9-4853-a58c-cdd7a4411223.png)   
출처 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

<br>

✨ **직접 변경을 안하고 복사하는 이유**
```
 React 대 원칙 : immutable data

 React 개발자들의 권장 사항이기 때문 : 모든 state 데이터들은 직접 수정되면 안되는 대 원칙을 가지고 있음.
```


