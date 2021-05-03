import React, { useState } from "react";
import './App.css';
//[state, state modify function] = useState()~ 이렇게 해야 재렌더링이 일어남
function App() {
  let [title, mTitle] = useState(["Should I buy more classes?","React Class Notes",  "My birthday"]);
  let [date, mDate] = useState(["today","4/26",  "4/13"]);
  let [favNum, clicked] = useState(0); //clicked 는 함수! 앞 state 변수 변경할 때 사용
  let [modal, modal_modify] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <div>Developer Blog</div>
      </div>
      <button onClick={ () => { 
        let newArray = [...title];  //deep copy를 해야함, 그냥 copy 말고, A = B 는 값 공유
        newArray[0] = "Yes! because You want!";
        mTitle(newArray) } }>Change title</button>
      <div className="post-wrapper">
        <div className="post">
          <span className="post__title"> {title[0]} 
          <span className="fav-num" onClick={ () => { clicked(favNum + 1) }}> 👍 {favNum}</span>
          </span>
          <span className="post__date"> {date[0]} </span>
        </div>
        <div className="post">
          <span className="post__title"> {title[1]} </span>
          <span className="post__date"> {date[1]} </span>
        </div>
        <div className="post">
          <span className="post__title"> {title[2]} </span>
          <span className="post__date"> {date[2]} </span>
        </div>
      </div>

      <button onClick={ () => { modal_modify(!modal) }}>Modal</button>
      { //난 modal에 0값 주고 클릭시 +1씩 더해서 modal%2 로 나머지 값이 0과 1일때로 나누어 모달창 열고닫음
        modal === true ? <Modal /> : null
      }
      
    </div>
  );
}
//component 처음은 대문자로. return (여기에는 평행한 단 하나의 태그만 쓰기);
function Modal(){ //component! very useful and 보기좋음! 관리도 편함!
  return (
      <div className="modal">
        <div className="modal__info">
        <span className="modal__title"> title </span>
        <span className="modal__date"> date </span>
        </div>
        <span className="modal__content"> content </span>
      </div>
  );//state값을 여기에 쓰진 못하나?
  //상위 component에서 만든 state를 쓰려면 props 문법을 써야함.
  //component를 많이 만들 때의 단점이다. state의 사용이 복잡해지는 것.
}

export default App;
