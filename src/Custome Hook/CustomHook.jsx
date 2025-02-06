import React from "react";
import useEvenOddFinder from "./useEvenOddFinder";

function CustomHook() {
  const [number, evenOddResult, eoResult, inc, setNumber] = useEvenOddFinder();

  return (
    <>
      <h1>Custom Hook</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        placeholder="Enter a number"
      />
      <button onClick={() => eoResult(number)}>Even Odd</button>
      <button onClick={inc}>Increment</button>
      <br />
      <br />
      <h4>The number is: {number}</h4>
      <h4>The number is even or odd: {evenOddResult}</h4>
    </>
  );
}

export default CustomHook;
