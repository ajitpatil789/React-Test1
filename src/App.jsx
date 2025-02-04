import { useState } from "react";
import "./App.css";
import Intern from "./Components/Intern/Intern";
import Calculator from "./Hook/Calculator";
import ChangeBgColor from "./Hook/ChangeBgColor";
import HideShowData from "./Hook/HideShowData";
import StateChangeUseState from "./Hook/StateChangeUseState";
import UseStateAppLayout from "./UseState-Hook/UseStateAppLayout";
import DataFetching from "./UseEffect/DataFeatching";
import UserList from "./UseEffect/DataFeatching";
import UseEffectApp from "./UseEffect/UseEffectApp";
import Counter from "./UseEffect/IncDecButton";
import ClearInput from "./Hook/ClearInput";
import LoginForm from "./UseRefHook/Login";

function App() {
  return (
    <>
      {/* <Intern /> */}
      {/* <StateChangeUseState /> */}
      {/* <Calculator /> */}
      {/* <HideShowData /> */}
      {/* <ChangeBgColor /> */}
      {/* <UseStateAppLayout /> */}
      {/* <UseEffectApp /> */}
      {/* <Counter /> */}
      {/* <ClearInput /> */}
      <LoginForm />
    </>
  );
}

export default App;
