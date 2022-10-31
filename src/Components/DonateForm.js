import React, { useState } from "react";
import DonorsList from "./DonorsList";

function DonateForm ({student}){
  const [donorForm, setDonorForm] = useState({
    first_name: '',
    last_name: '',
    donation: 0,
    donation_received: false,
    student_id: student
  })

  const handleChange = (e) => {
    setDonorForm({...donorForm, [e.target.name]: e.target.value})
  };

  return(
    <div>
        <form className='Form-donate'>
          <input type="text" placeholder="First Name" value={donorForm.first_name} name="first_name" onChange={handleChange} required/>
          <input  type="text" placeholder="Last Name"value={donorForm.last_name} name="last_name" onChange={handleChange} required/>
          <input  type="number" placeholder="Age" value={donorForm.donation} name="donation" onChange={handleChange} required/>
          <button className='Form-button'>Submit Donation</button>
        </form>
    </div>
  )

}

export default DonateForm;