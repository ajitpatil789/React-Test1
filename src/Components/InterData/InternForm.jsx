import React from "react";
import { Form, Button } from "react-bootstrap";

function InternForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      address: e.target.address.value,
      dob: e.target.dob.value,
      education: e.target.education.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      skills: e.target.skills.value,
      comments: e.target.comments.value,
    };
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="fullName" required />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name="phoneNumber" required />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" required />
      </Form.Group>
      <Form.Group controlId="dob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" name="dob" required />
      </Form.Group>
      <Form.Group controlId="education">
        <Form.Label>Education Qualification</Form.Label>
        <Form.Control type="text" name="education" required />
      </Form.Group>
      <Form.Group controlId="startDate">
        <Form.Label>Internship Start Date</Form.Label>
        <Form.Control type="date" name="startDate" required />
      </Form.Group>
      <Form.Group controlId="endDate">
        <Form.Label>Internship End Date</Form.Label>
        <Form.Control type="date" name="endDate" required />
      </Form.Group>
      <Form.Group controlId="skills">
        <Form.Label>Skills</Form.Label>
        <Form.Control type="text" name="skills" required />
      </Form.Group>
      <Form.Group controlId="comments">
        <Form.Label>Comments/Feedback</Form.Label>
        <Form.Control as="textarea" name="comments" required />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default InternForm;
