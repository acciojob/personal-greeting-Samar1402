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
      <input type="text" onChange={handleInput}></input>
      {input ? <p>Hello {input}!</p> : null}
    </div>
  );
};

export default App;
