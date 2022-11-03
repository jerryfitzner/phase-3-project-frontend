import React, { useState } from "react";
import DonateForm from "./DonateForm";
import Donor from "./Donor";

function DonorsList ({student}){
  const [donors, setDonors] = useState(student.donors);
  const [donorForm, setDonorForm] = useState({
    first_name: '',
    last_name: '',
    donation: '',
    donation_received: false,
    student_id: student.id
  });
  
  const handleDonorSubmit = (donor) => {
    setDonors([...donors, donor])
  }

  const onDeleteDonor = (id) => {
    const updatedDonors = donors.filter(donor => donor.id !== id);
    setDonors(updatedDonors);
  }

  

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
                {donors.map((donor) => (
                  <Donor donor={donor} onDeleteDonor={onDeleteDonor}/>
                ))}
              </tbody>
          </table>
      </div>
    </div>
  )

}

export default DonorsList;