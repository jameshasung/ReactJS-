import React, { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter(counter + 1);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const runOnce = () => {
    console.log("runOnce");
  };
  useEffect(runOnce, []);
  useEffect(() => {
    console.log("counter changed");
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("search for ", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("all changed");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
