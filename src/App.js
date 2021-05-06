import React, { useState } from "react";
import './App.css';
//[state, state modify function] = useState()~ 이렇게 해야 재렌더링이 일어남
function App() {
  let [title, mTitle] = useState(["Should I buy more classes?","React Class Notes",  "My birthday"]);
  let [date, mDate] = useState(["today","4/26",  "4/13"]);
  let [content, mContent] = useState([
    "You bought Codding apple's class, right? Then you are satisfied?",
    "State, Hooks, class, props... Should practice more and more",
    "Is over, k380 is Mine! And DY's first Birthday is over too."
  ])
  // let [favNum, clicked] = useState(0); //clicked 는 함수! 앞 state 변수 변경할 때 사용
  let [modal, modal_modify] = useState(false);
  let [postNum, mpostNum] = useState(0);
  let [submit, mSubmit] = useState("");
  let [submitContent, mSubmitContent] = useState("");
  var posts = [];

  return (
    <div className="App">
      <div className="black-nav">
        <div>Developer Blog</div>
      </div>
  
      <div className="post-wrapper">
        {
          title.map(function(title, i){
            return (
            <div className="post" key={i} onClick={ () => { 
              mpostNum(i)
              modal_modify(true) }}>
              <span className="post__title">{title}</span>
              <span className="post__date">{date[i]}</span> 
            </div>
            );} )
        }
        <div className="submit-box">
          <input className="submitTitle" type="text" placeholder="title" onChange={ (e) => { mSubmit(e.target.value) }} />
          <textarea className="submitContent" type="text" placeholder="Content" onChange={ (e) => { mSubmitContent(e.target.value) }} />
          <button onClick={ () => {
            posts = [submit ,...title];
            mTitle(posts);
            posts = ["now", ...date];
            mDate(posts);
            posts = [submitContent, ...content];
            mContent(posts);
            //input과 textarea 에 있는 value값 초기화하는건 어떻게?
          }}>Upload</button>
         </div>

   {
     modal === true
     ? <Modal title={title} postNum={postNum} date={date} mModal={modal_modify} content={content} /> // <Component_name 자식컴포넌트에서 사용할 이름 = 전송할 state />
     : null
   }

      
      </div>
    </div>
  );
}

function Modal(props){ //component! very useful and 보기좋음! 관리도 편함!
  return (
      <div className="modal_bg">
        <div className="modal_box">
          <div className="modal__info">
            <span className="modal__title"> {props.title[props.postNum]} </span>
            <span className="modal__date"> {props.date[props.postNum]} </span>
          </div>
          <span className="modal__content"> {props.content[props.postNum]} </span>
          <div className="modal_close" onClick={ () => { props.mModal(false)} }>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
  );//state값을 여기에 쓰진 못하나?
  //상위 component에서 만든 state를 쓰려면 props 문법을 써야함.
  //component를 많이 만들 때의 단점이다. state의 사용이 복잡해지는 것.
}

export default App;
