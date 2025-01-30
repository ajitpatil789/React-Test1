import { useState } from "react";
import "./App.css";
import Intern from "./Components/Intern/Intern";
import Calculator from "./Hook/Calculator";
import ChangeBgColor from "./Hook/ChangeBgColor";
import HideShowData from "./Hook/HideShowData";
import StateChangeUseState from "./Hook/StateChangeUseState";
import UseStateAppLayout from "./UseState-Hook/UseStateAppLayout";

function App() {
  return (
    <>
      {/* <Intern /> */}
      {/* <StateChangeUseState /> */}
      {/* <Calculator /> */}
      {/* <HideShowData /> */}
      {/* <ChangeBgColor /> */}
      <UseStateAppLayout />
    </>
  );
}

export default App;
