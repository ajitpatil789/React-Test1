import React, { useState } from "react";
import "./HideShowData.css"; // Import the CSS file
import Calculator from "./Calculator";
import "./HideShowData.css";

function HideShowData() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <button onClick={toggleVisibility} className="toggle-button">
        {isVisible ? "Hide Data" : "Show Data"}
      </button>
      {isVisible && (
        <div id="data" className="data-box">
          <Calculator />
        </div>
      )}
    </div>
  );
}

export default HideShowData;
