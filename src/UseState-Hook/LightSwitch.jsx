import { useState } from "react";

export default function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => setIsOn(!isOn);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: isOn ? "yellow" : "gray",
          margin: "20px auto",
          transition: "background-color 0.3s",
        }}
      ></div>
      <button onClick={toggleLight} style={{ padding: "10px" }}>
        Turn {isOn ? "OFF" : "ON"}
      </button>
    </div>
  );
}
