# 2021120 TIL 정리 - React

## 1. React modal

### a. 모달 생성

modal ui 생성

![image](https://user-images.githubusercontent.com/84966961/142729653-7b14c298-e1e4-446e-a790-97b81b48e4f9.png)

<br>

✨ **짚고 넘어가는 react 특징**

 -> return 내부에는 하나의 div 태그만 사용가능 하다.(형제 태그로 존재할 수 없음.)
 
<br><hr>

 ### b. Component

 내부에 많은 div 태그로 혼동이 올 수 있다. 그럴 때 react에서는 나만의 태그로 반복적인 태그들을 치환하여 사용할 수 있는 데 그 기능이 `Component` 이다.   
 
 다음은 div 태그와 Modal 태그가 같다고 생각하면 된다.    

 ![image](https://user-images.githubusercontent.com/84966961/142729802-9c603353-77a5-454a-b015-1db423166f7c.png)


<br><hr>

  ✨ **Component 유의사항**   
   1. 이름은 대문자 시작(소문자는 인식을 안함.)
   2. return 내부에 있는 것은 태그 하나에 묶어야함(각각 형제 태그로 존재할 수 없음.)
   <br>의미없는 div를 쓰기 싫어 묶고싶으면 `<>` fragment를 사용하여 묶어주면 된다.
   3. Component의 위치는 App 함수와 나란히 존재하면 된다.
    
 ![image](https://user-images.githubusercontent.com/84966961/142730447-63ac7927-484d-41c2-8449-647b63c14816.png)

   ✋ **Component 만드는 기준**   
 
 1. 반복 출현하는 HTML 덩어리들
 2. 자주 변경되는 HTML UI들
 3. 다른 페이지 만들 때도 컴포넌트로 만듬


   😰 **Component 사용시 단점**   
 
 - state 쓸 때 복잡해짐
   -> 상위 component 에서 만든 state를 사용하려면 props 문법을 사용해야함.