import React, { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };
  const runOnce = () => {
    console.log("runOnce");
  };
  useEffect(runOnce, []);
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
