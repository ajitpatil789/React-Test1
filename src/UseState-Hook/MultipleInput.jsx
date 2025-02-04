import React, { useState } from "react";

function MultipleInput() {
  const [formData, setFormData] = useState({ name: "", age: "", gender: "" });
  const [items, setItems] = useState([]);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddItems = () => {
    setItems([...items, formData]);
    setFormData({ name: "", age: "", gender: "" });
  };
  // Inline CSS styles
  const inputStyle = {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "center",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id=""
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="age"
        id=""
        placeholder="Enter age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <label htmlFor="">
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleInputChange}
        />
        Male
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleInputChange}
        />
        Female
      </label>
      <button onClick={handleAddItems}>Add Items</button>
      {/* <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.age} years old - {item.gender}
          </li>
        ))}
      </ul> */}
      {items.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...thStyle }}>Name</th>
              <th style={{ ...thTdStyle, ...thStyle }}>Age</th>
              <th style={{ ...thTdStyle, ...thStyle }}>Gender</th>
            </tr>
          </thead>
          <tbody>
            {items.map((items, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{items.name}</td>
                <td style={thTdStyle}>{items.age}</td>
                <td style={thTdStyle}>{items.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MultipleInput;
