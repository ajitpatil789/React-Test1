import React from "react";
import { Container } from "react-bootstrap";
import InternForm from "./InternForm";
import InternTable from "./InternTable";

function Intern() {
  const interns = [
    {
      fullName: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
      address: "123 Main St",
      dob: "1990-01-01",
      education: "Bachelor's Degree",
      startDate: "2022-01-01",
      endDate: "2022-06-01",
      skills: "JavaScript, React",
      comments: "Great intern!",
    },
    // Add more intern data as needed
  ];

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Here you can handle the form submission, e.g., update the state or send data to a server
  };

  return (
    <Container>
      <h2>Intern Information Form</h2>
      <InternForm onSubmit={handleFormSubmit} />
      <h2 className="mt-5">Intern Information Table</h2>
      <InternTable interns={interns} />
    </Container>
  );
}

export default Intern;
