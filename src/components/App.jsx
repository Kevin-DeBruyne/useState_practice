import React, { useState } from "react";

function App() {
  // let click="Hello"
  const [click, setClick] = useState("Hello");
  const [color, setColor] = useState(false);
  function clickHandler() {
    setClick("Submitted");
  }
  function MouseHandler() {
    setColor(true);
  }
  function OutHandler() {
    setColor(false);
  }
  return (
    <div className="container">
      <h1>{click}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={OutHandler}
        onMouseOver={MouseHandler}
        style={{ backgroundColor: color ? "black" : "white" }}
        onClick={clickHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
