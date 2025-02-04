import React, { useContext } from "react";
import CompanyContext from "./CompanyContext";

const ComponentB = () => {
  const { location } = useContext(CompanyContext);
  return <h2>Company Location: {location}</h2>;
};

export default ComponentB;
