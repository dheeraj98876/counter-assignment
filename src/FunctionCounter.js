import React, { useState } from "react";
import "./Counter.css";

function FunctionCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default FunctionCounter;
