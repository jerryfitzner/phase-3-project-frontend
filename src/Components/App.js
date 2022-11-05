
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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
    setStudents(stud)
  }

  

  const studentList = students.map((student) => (
    <Student student={student} key={uuidv4()} />
  ))


  return (
    <div>
      <Header />
      <StudentForm  handleStudSubmit={handleStudSubmit} />
      {studentList}
    </div>
  )
}

export default App;
