import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  function handleInput(e) {
    setInput(e.target.value);
    // setName([...name, input]);
  }

  return (
    <div>
      {/* <p>Enter Your name:</p> */}
      <input type="text" onChange={handleInput}></input>
      <p>{input ? <p>Hello {input}!</p> : null}</p>
    </div>
  );
};

export default App;
