/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {

  // JS ES6 destructuring 문법(새로추가된 문법)
  var [a, b] = [10, 100]; // array, object형의 내부 자료를 바로 변수에 담고 싶을 떄 사용 가능.

  let [titles, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '코딩 수업']); // [a,b]
  // a에는 남자코트추천이 들어가고

  let posts = '강남 고기 맛집'; // 데이터
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {titles.map((title, index) => (
        <div className="list" className={index}>
          <h3> {title} </h3>
          <p>2월 17일 발행</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
