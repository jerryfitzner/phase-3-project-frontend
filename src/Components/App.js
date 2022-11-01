
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

  // console.log(students)

  const handleStudSubmit = (stud) => {
    setStudents([...students, stud])
  }


  return (
    <div>
      <Header />
      <StudentForm handleStudSubmit={handleStudSubmit}/>
      <Student students={students}/>
    </div>
  )
}

export default App;
