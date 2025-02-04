import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function DataTable() {
  const data = useContext(DataContext);
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth (DOB)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) => (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
