import React, { useState, useMemo } from "react";
import "./NumberChecker.css";

const NumberChecker = () => {
  const [number, setNumber] = useState("");

  const isEvenOdd = useMemo(() => {
    if (number === "") return "";
    return number % 2 === 0 ? "Even" : "Odd";
  }, [number]);

  const isPrime = useMemo(() => {
    if (number === "" || number < 2) return "Not Prime";
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return "Not Prime";
    }
    return "Prime";
  }, [number]);

  return (
    <div className="container">
      <h2>Even, Odd & Prime Checker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      {number !== "" && (
        <div className="result">
          <p>
            <strong>Even/Odd:</strong> {isEvenOdd}
          </p>
          <p>
            <strong>Prime Status:</strong> {isPrime}
          </p>
        </div>
      )}
    </div>
  );
};

export default NumberChecker;
