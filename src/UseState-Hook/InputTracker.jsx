import React, { useState } from "react";

function InputTracker() {
  const [text, setText] = useState("");
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "350px",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "4px",
      }}
    >
      <h1>Input Tracker</h1>
      <input
        type="text"
        placeholder="Type Something"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
      <p style={{ marginTop: "10px", fontSize: "18px" }}>
        You typed: <strong>{text}</strong>
      </p>
    </div>
  );
}

export default InputTracker;
