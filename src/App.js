import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집'; // 데이터
  let fontColor = { color : 'red', fontSize : '30px'};

  function 함수() {
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={fontColor}>개발 Blog</div>
      </div>
      <img src={logo} />
      <h4>{posts}</h4>
      <h4>{함수()}</h4>
    </div>
  );
}

export default App;
