// src/StudentList.jsx
import React from "react";

const StudentList = ({ students = [] }) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => {
          const low = s.marks < 35;
          return (
            <tr
              key={s.id}
              style={{
                backgroundColor: low ? "#e74c3c" : "white",
                color: low ? "white" : "black",
              }}
            >
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{s.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{s.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{s.marks}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentList;
