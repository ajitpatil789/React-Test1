import React, { useContext } from "react";
import CompanyContext from "./CompanyContext";

const ComponentA = () => {
  const { name } = useContext(CompanyContext);
  return <h2>Company Name: {name}</h2>;
};

export default ComponentA;
