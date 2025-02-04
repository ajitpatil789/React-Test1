import React from "react";
import { useState } from "react";
import { createContext } from "react";
//create one table and pass the data by using useContext.
//-Data: Name and DOB
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data] = useState([
    { name: "John Doe", dob: "1990-01-01" },
    { name: "Jane Smith", dob: "1985-05-12" },
    { name: "Alex Brown", dob: "2000-09-25" },
  ]);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
