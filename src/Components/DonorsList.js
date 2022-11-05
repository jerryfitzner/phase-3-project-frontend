import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DonateForm from "./DonateForm";
import Donor from "./Donor";

function DonorsList ({student, seeDonors}){
  const [donors, setDonors] = useState(student.donors);
  
  const handleDonorSubmit = (donor) => {
    setDonors([...donors, donor])
  }

  const onDeleteDonor = (id) => {
    const updatedDonors = donors.filter(donor => donor.id !== id);
    setDonors(updatedDonors);
  }

  if(seeDonors === true){
  return(
    <div>
      <DonateForm student={student.id} handleDonorSubmit={handleDonorSubmit}/>
      <div className='Background'>
    <h3>Donors:</h3>
      <table>
       <thead>
         <tr>
           <th>First Name Last Name</th>
           <th>Pledge</th>
           <th>Donation Recieved</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
         {donors.map((donor) => (<Donor key={uuidv4()} donor={donor} onDeleteDonor={onDeleteDonor}/>))}
       </tbody>
      </table>
  </div> 
    </div>
  )}
}

export default DonorsList;