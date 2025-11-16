// src/App.jsx
import React from "react";
import StudentList from "./pages/StudentList";
import CounterApp from "./pages/CounterApp";  
import Users from "./pages/Users";


function App() {
  const students = [
    { id: 1, name: "Rahul", marks: 80 },
    { id: 2, name: "Ankit", marks: 25 },
    { id: 3, name: "Meena", marks: 60 },
    { id: 4, name: "Priya", marks: 33 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Student List</h1>
      <StudentList students={students} />
      <CounterApp />
      <Users />
    </div>
  );
}

export default App;
