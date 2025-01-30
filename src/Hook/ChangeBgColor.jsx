import React, { useState } from "react";

function ChangeBgColor() {
  const [bgColor, setBgColor] = useState("white");

  const handleBgColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>useState Hook</h2>
      <div
        style={{
          border: "1px solid",
          padding: "2%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <h2 style={{ backgroundColor: bgColor }}>Change Background Color</h2>
      </div>
      <div
        style={{
          border: "1px solid",
          padding: "2%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => handleBgColorChange("blue")}>Blue BG</button>
        <button onClick={() => handleBgColorChange("green")}>Green BG</button>
        <button onClick={() => handleBgColorChange("yellow")}>Yellow BG</button>
        <button onClick={() => handleBgColorChange("red")}>Red BG</button>
      </div>
    </>
  );
}

export default ChangeBgColor;
