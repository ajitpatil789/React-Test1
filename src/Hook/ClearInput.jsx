import React, { useState } from "react";

function ClearInput() {
  const [text, SetText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="write Something"
        value={text}
        onChange={(e) => SetText(e.target.value)}
      />
      <button onClick={() => SetText("")}>Click Reset</button>
    </div>
  );
}

export default ClearInput;
