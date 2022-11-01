import React, { useState } from "react";
import DonorsList from "./DonorsList";

function DonateForm ({student , handleDonorSubmit}){
  const [donorForm, setDonorForm] = useState({
    first_name: '',
    last_name: '',
    donation: '',
    donation_received: false,
    student_id: student
  })

  const handleChange = (e) => {
    setDonorForm({...donorForm, [e.target.name]: e.target.value})
  };

  const handleIntChange = (e) => {
    setDonorForm({...donorForm, [e.target.name]: parseFloat(e.target.value)})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/donors', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donorForm)
    })
    .then(r => r.json())
    .then(donor => {
      handleDonorSubmit(donor);
      setDonorForm({
        first_name: '',
        last_name: '',
        donation: '',
        donation_received: false
      })
    })
    
  }

  return(
    <div>
        <form className='Form-donate' onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" value={donorForm.first_name} name="first_name" onChange={handleChange} required/>
          <input  type="text" placeholder="Last Name"value={donorForm.last_name} name="last_name" onChange={handleChange} required/>
          <input  type="number" placeholder="Donation Amount" value={donorForm.donation} name="donation" onChange={handleIntChange} required/>
          <button className='Form-button'>Submit Donation</button>
        </form>
    </div>
  )

}

export default DonateForm;