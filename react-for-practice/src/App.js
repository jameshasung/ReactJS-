import React, { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm created :)");
    return () => console.log("I'm destroyed :(");
  }, []);
  return <h1>hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(!showing);
  return (
    <div>
      {showing && <Hello />}
      <button onClick={onClick}>{showing ? "Hide" : "Show"} </button>
    </div>
  );
}
export default App;
