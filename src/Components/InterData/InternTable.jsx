import React from "react";
import { Table } from "react-bootstrap";

function InternTable({ interns }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Date of Birth</th>
          <th>Education</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Skills</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {interns.map((intern, index) => (
          <tr key={index}>
            <td>{intern.fullName}</td>
            <td>{intern.email}</td>
            <td>{intern.phoneNumber}</td>
            <td>{intern.address}</td>
            <td>{intern.dob}</td>
            <td>{intern.education}</td>
            <td>{intern.startDate}</td>
            <td>{intern.endDate}</td>
            <td>{intern.skills}</td>
            <td>{intern.comments}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default InternTable;
