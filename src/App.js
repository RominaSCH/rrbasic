import React, { useState } from "react";
import './App.css';

function App() {
  let [title] = useState(["Should I buy more classes?","React Class Notes",  "My birthday"]);
  let [date] = useState(["today","4/26",  "4/13"])
  return (
    <div className="App">
      <div className="black-nav">
        <div>Developer Blog</div>
      </div>
      <div className="post-wrapper">
        <div className="post">
          <span className="post__title"> {title[0]} </span>
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
    </div>
  );
}

export default App;
