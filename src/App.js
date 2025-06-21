import React from "react";
import "./App.css";
import ClassCounter from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <div className="row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;
