import React, { useState } from "react";

function App() {
  // let click="Hello"
  // const [click, setClick] = useState("Hello");
  const [color, setColor] = useState("White");
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  // const [fname, setfName] = useState("");
  function changeHandler(event) {
    setName(event.target.value);
  }
  function changelHandler(event) {
    setlName(event.target.value);
  }
  // function clickHandler() {
  //   // setClick("Submitted");
  //   console.log("hello");
  //   setfName(name);
  // }
  function MouseHandler() {
    setColor("Black");
  }
  function OutHandler() {
    setColor("White");
  }
  return (
    <div className="container">
      <h1>
        Hello {name} {lname}
      </h1>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="What's your name?"
      />
      <input
        onChange={changelHandler}
        type="text"
        placeholder="What's your LastName?"
      />
      <button
        onMouseOut={OutHandler}
        onMouseOver={MouseHandler}
        style={{ backgroundColor: color }}
        // onClick={clickHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
