import React, { useEffect, useState } from "react";

function Counter() {
  const [countx, setCountx] = useState(0);
  const [county, setCounty] = useState(0);
  const incCountx = () => {
    setCountx((preCount) => preCount + 1);
  };
  const incCounty = () => {
    setCounty((preCount) => preCount + 1);
  };

  useEffect(
    function printSomething() {
      console.log("this is the side effect");
    },
    [countx]
  );
  return (
    <div>
      <h3>Countx {countx}</h3>
      <button onClick={incCountx}>+1</button>
      <h3>County {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}

export default Counter;
