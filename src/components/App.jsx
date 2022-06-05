import React, { useState } from "react";

function App() {
  // let click="Hello"
  const [click, setClick] = useState("Hello");
  const [color, setColor] = useState("White");
  function clickHandler() {
    setClick("Submitted");
  }
  function MouseHandler() {
    setColor("Black");
  }
  function OutHandler() {
    setColor("White");
  }
  return (
    <div className="container">
      <h1>{click}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={OutHandler}
        onMouseOver={MouseHandler}
        style={{ backgroundColor: color }}
        onClick={clickHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
