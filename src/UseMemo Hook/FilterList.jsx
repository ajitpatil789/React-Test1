import React, { useState, useMemo } from "react";

const students = [
  { id: 1, name: "Rahul Sharma" },
  { id: 2, name: "Amit Verma" },
  { id: 3, name: "Priya Mehta" },
  { id: 4, name: "Sneha Gupta" },
  { id: 5, name: "Vikas Yadav" },
  { id: 6, name: "Neha Reddy" },
  { id: 7, name: "Rajesh Kumar" },
  { id: 8, name: "Sonia Roy" },
  { id: 9, name: "Aditya Singh" },
  { id: 10, name: "Pooja Malhotra" },
];

const StudentSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // useMemo to optimize filtering
  const filteredStudents = useMemo(() => {
    console.log("Filtering students...");
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); // Recalculates only when searchTerm changes

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Student Search</h2>
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />
      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student.id} style={{ listStyle: "none" }}>
              {student.name}
            </li>
          ))
        ) : (
          <p>No students found</p>
        )}
      </ul>
    </div>
  );
};

export default StudentSearch;
