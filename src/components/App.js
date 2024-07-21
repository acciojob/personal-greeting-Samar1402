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
      <label>Enter Your name:</label>
      <input type="text" value={input} onChange={handleInput}></input>
      <p>{input.length > 0 && `Hello ${input}!`}</p>
    </div>
  );
};

export default App;
