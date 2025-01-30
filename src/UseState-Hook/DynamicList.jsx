import React, { useState } from "react";

function DynamicList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddItems = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <h2>dynamic List</h2>
      <input
        type="text"
        placeholder="Add a new item"
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={handleAddItems} style={{ padding: "8px" }}>
        Add
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
