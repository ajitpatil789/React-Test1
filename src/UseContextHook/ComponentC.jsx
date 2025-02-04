import React, { useContext } from "react";
import CompanyContext from "./CompanyContext";

const ComponentC = () => {
  const { name, location } = useContext(CompanyContext);
  return (
    <h3>
      {name} is located in {location}.
    </h3>
  );
};

export default ComponentC;
