import React, { createContext } from "react";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  // Named export
  const companyInfo = {
    name: "Ajit Quick Cart",
    location: "Pune, India",
  };

  return (
    <CompanyContext.Provider value={companyInfo}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext; // Default export for useContext
