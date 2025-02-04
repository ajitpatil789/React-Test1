import React from "react";
import { DataProvider } from "./DataContext";
import DataTable from "./DataTable";

function AppLayout() {
  return (
    <DataProvider>
      <h1>People Data</h1>
      <DataTable />
    </DataProvider>
  );
}

export default AppLayout;
