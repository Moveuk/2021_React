/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {

  // JS ES6 destructuring 문법(새로추가된 문법)
  var [a, b] = [10, 100]; // array, object형의 내부 자료를 바로 변수에 담고 싶을 떄 사용 가능.

  let [titles, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '코딩 수업']); // [a,b]
  // a에는 남자코트추천이 들어가고

  const arr = Array.from({ length: titles.length }, () => 0);

  let [따봉, 따봉변경] = useState(arr);
  let [button, changeButton] = useState(titles[0]);

  function 글제목바꾸기() {
    var newArray = [...titles]; // ... : spread operator (ES6 문법) : 해당 값의 중괄호 대괄호를 벗겨서 데이터 반환.
    newArray[0] = `여자 코트 추천`;
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={글제목바꾸기}>버튼</button>
      {titles.map((title, index) => (
        <div className="list" className={index}>
          <h3> {title} <span onClick={() => { 따봉변경(따봉[index] + 1) }}> 👍</span> {따봉[index]} </h3>
          <p>2월 17일 발행</p>
          <hr />
        </div>
      ))}

      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() { // Component
  // Component 유의사항
  // 1. 이름은 대문자 시작(소문자는 인식을 안함.)
  // 2. return 내부에 있는 것은 태그 하나에 묶어야함(각각 형제 태그로 존재할 수 없음.)
  //    의미없는 div를 쓰기 싫어 묶고싶으면 `<>` fragment를 사용하여 묶어주면 된다.
  // 3. Component의 위치는 App 함수와 나란히 존재하면 된다.
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

export default App;
