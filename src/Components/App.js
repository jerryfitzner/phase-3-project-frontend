
import React, { useEffect, useState } from "react";
import '../App.css';
import StudentForm from "./StudentForm";
import Student from "./Student";
import Header from "./Header";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/students")
      .then(r => r.json())
      .then((student) => setStudents(student))
  }, []);



  const handleStudSubmit = (stud) => {
    setStudents([...students, stud])
  }

  
  const studentList = students.map((student) => (
    <Student student={student} />
  ))


  return (
    <div>
      <Header />
      <StudentForm handleStudSubmit={handleStudSubmit}/>
      {studentList}
    </div>
  )
}

export default App;
