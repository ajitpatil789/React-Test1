import React, { useState } from "react";
import "./AverageFinder.css";

function AverageFinder() {
  const [darkMode, setDarkMode] = useState(false);
  const [marks, setMarks] = useState(["", "", "", "", "", "", ""]);
  const [average, setAverage] = useState(null);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  function handleChange(index, value) {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  }

  function calculateAverage() {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
      const num = Number(marks[i]);
      if (!isNaN(num) && marks[i] !== "") {
        sum += num;
        count++;
      }
    }
    if (count === 7) {
      setAverage((sum / 7).toFixed(2));
    } else {
      setAverage("Please enter all 7 valid marks.");
    }
  }

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <button onClick={toggleTheme} className="toggle-button">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="calculator">
        <h2>Enter Marks for 7 Subjects</h2>
        {marks.map((mark, index) => (
          <input
            key={index}
            type="number"
            value={mark}
            onChange={(e) => handleChange(index, e.target.value)}
            className="input-field"
            placeholder={`Subject ${index + 1}`}
          />
        ))}
        <button onClick={calculateAverage} className="calculate-button">
          Calculate Average
        </button>
        {average !== null && <p className="result">Average: {average}</p>}
      </div>
    </div>
  );
}

export default AverageFinder;
