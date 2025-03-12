import React from "react";
import InputTracker from "./InputTracker";
import ChangeBgColor from "./ChangeBgColor";
import ShoppingCartCounter from "./ShoppingCartCounter";
import LightSwitch from "./LightSwitch";
import DynamicList from "./DynamicList";
import CharacterCounter from "./CharacterCounter";
import TemperatureConverter from "./TemperatureConverter";
import MultipleInput from "./MultipleInput";

function UseStateAppLayout() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <InputTracker />
      {/* <ChangeBgColor /> */}
      {/* <ShoppingCartCounter /> */}
      {/* <LightSwitch /> */}
      {/* <DynamicList /> */}
      {/* <CharacterCounter /> */}
      {/* <TemperatureConverter /> */}
      {/* <MultipleInput /> */}
    </div>
  );
}

export default UseStateAppLayout;
