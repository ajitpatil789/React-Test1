import React, { useState } from "react";

function ChangeBgColor() {
  const [isBlue, setIsBlue] = useState(false);
  const toggleColor = (prev) => {
    setIsBlue((prev) => !prev);
  };
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        backgroundColor: isBlue ? "#3498db" : "#f39c12",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        transition: "background-color 0.3s ease",
      }}
    >
      <button
        onClick={toggleColor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#fff",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Toggle Background
      </button>
    </div>
  );
}

export default ChangeBgColor;
