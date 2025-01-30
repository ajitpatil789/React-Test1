import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    setFahrenheit((celsiusValue * 9) / 5 + 32); // Convert Celsius to Fahrenheit
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius(((fahrenheitValue - 32) * 5) / 9); // Convert Fahrenheit to Celsius
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
      <h2>Temperature Converter</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </div>

      <div>
        <label>Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </div>
    </div>
  );
}
