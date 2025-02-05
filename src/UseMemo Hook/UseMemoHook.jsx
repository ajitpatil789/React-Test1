import React, { useState, useMemo } from "react";

function UseMemoHook() {
  const [num, setNum] = useState(0);

  const factorial = useMemo(() => {
    const factorialNumber = (n) => {
      if (n < 0) {
        alert("Please enter a positive number");
        return 0;
      }
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * factorialNumber(n - 1);
    };
    return factorialNumber(num);
  }, [num]);

  return (
    <>
      <h1>Use memo hook</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(parseInt(e.target.value));
        }}
      />
      <h3>
        The input Value: {num} and factorial is {factorial}
      </h3>
    </>
  );
}

export default UseMemoHook;
