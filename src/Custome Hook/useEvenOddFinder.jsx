import { useState } from "react";

function useEvenOddFinder(initial = 1) {
  const [number, setNumber] = useState(initial);
  const [evenOddResult, setEvenOddResult] = useState("");

  function eoResult(n) {
    setEvenOddResult(n % 2 === 0 ? "Even number" : "Odd number");
  }

  function inc() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  return [number, evenOddResult, eoResult, inc, setNumber];
}

export default useEvenOddFinder;
