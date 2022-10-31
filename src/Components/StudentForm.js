import React, { useState } from "react";

function StudentForm (){
  const [studentForm, setStudentForm] = useState({
    first_name: '',
    last_name: '',
    age: ''
  });

  const handleChange = (e) => {
    setStudentForm({...studentForm, [e.target.name]: e.target.value})
  };

  const handleIntChange = (e) => {
    setStudentForm({...studentForm, [e.target.name]: parseFloat(e.target.value)})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/students', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentForm)
    })
    .then(r => r.json())
    .then(stud => {
      // studentSubmit(stud);
      setStudentForm({
        first_name: '',
        last_name: '',
        age: 0
      })
    })
    
  }

  return(
    <div>
     <h2>Add a New Student</h2>
      <form className='Form' onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={studentForm.first_name} name="first_name" onChange={handleChange} required/>
        <input  type="text" placeholder="Last Name" value={studentForm.last_name} name="last_name" onChange={handleChange} required/> 
        <input  type="number" placeholder="Age" value={studentForm.age} name="age" onChange={handleIntChange} required/>
        <button className='Form-button'>Create Student</button>
      </form>
    </div>
  )

}

export default StudentForm;