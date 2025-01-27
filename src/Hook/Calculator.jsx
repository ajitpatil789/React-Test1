import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  const handleDivision = () => {
    if (num2 === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(num1 / num2);
    }
  };

  const handleInputChange = (setter) => (e) => {
    const value = parseFloat(e.target.value);
    setter(isNaN(value) ? 0 : value);
    setResult(null); // Clear result when inputs change
  };
  const handleReset = () => {
    setNum1(0);
    setNum2(0);
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <h1>Simple Calculator</h1>
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={handleInputChange(setNum1)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={handleInputChange(setNum2)}
          placeholder="Enter second number"
        />
      </div>
      <div className="button-container">
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <h2>Result: {result !== null ? result : "No result"}</h2>
    </div>
  );
}

export default Calculator;
