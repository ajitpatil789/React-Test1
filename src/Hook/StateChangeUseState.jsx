import React, { useState } from "react";

function StateChangeUseState() {
  const [count, setCount] = useState(100);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Hook - useState</h1>
      <hr />
      <h4>Counting {count}</h4>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickDecrement}>Descrement</button>
    </div>
  );
}

export default StateChangeUseState;
