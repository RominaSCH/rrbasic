import React, { useState } from "react";
import './App.css';
//[state, state modify function] = useState()~ 이렇게 해야 재렌더링이 일어남
function App() {
  let [title, mTitle] = useState(["Should I buy more classes?","React Class Notes",  "My birthday"]);
  let [date, mDate] = useState(["today","4/26",  "4/13"]);
  // let [favNum, clicked] = useState(0); //clicked 는 함수! 앞 state 변수 변경할 때 사용
  let [modal, modal_modify] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <div>Developer Blog</div>
      </div>
  
      <div className="post-wrapper">
        {
          title.map( t => {return (
            <div className="post">
              <span className="post__title"> {t} </span>
              <span className="post__date"> 5/4</span> 
            </div>
            );} )
        }
  <button onClick={ () => { modal_modify(!modal)}}>Modal</button>
   {
     modal === true
     ? <Modal title={title} /> // <Component_name 자식컴포넌트에서 사용할 이름 = 전송할 state />
     : null
   }
      
    </div>
    </div>
  );
}

function Modal(props){ //component! very useful and 보기좋음! 관리도 편함!
  return (
      <div className="modal">
        <div className="modal__info">
        <span className="modal__title"> {props.title[0]} </span>
        <span className="modal__date"> 5/3 </span>
        </div>
        <span className="modal__content"> 하라야 어쩌자고 니 인생을 시궁창에 몰아넣니 거기서 나와 당장 </span>
      </div>
  );//state값을 여기에 쓰진 못하나?
  //상위 component에서 만든 state를 쓰려면 props 문법을 써야함.
  //component를 많이 만들 때의 단점이다. state의 사용이 복잡해지는 것.
}

export default App;
