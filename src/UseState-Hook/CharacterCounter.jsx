import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
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
      <h2>Character Counter</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        style={{
          width: "300px",
          height: "150px",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
        }}
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}
