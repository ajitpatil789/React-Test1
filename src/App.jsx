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
import { CompanyProvider } from "./UseContextHook/CompanyContext";

import ComponentA from "./UseContextHook/ComponentA";
import ComponentB from "./UseContextHook/ComponentB";
import ComponentC from "./UseContextHook/ComponentC";
import AppLayout from "./UseContext2/AppLayout";
import UseMemoHook from "./UseMemo Hook/UseMemoHook";

import NumberChecker from "./UseMemo Hook/NumberChecker";

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
      {/* <LoginForm /> */}
      {/* <CompanyProvider>
        <h1>Welcome to Our Company</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CompanyProvider> */}
      {/* <AppLayout /> */}
      {/* <UseMemoHook /> */}
      {/* <StudentSearch /> */}

      <NumberChecker />
    </>
  );
}

export default App;
