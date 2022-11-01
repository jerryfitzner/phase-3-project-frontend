import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DonateForm from "./DonateForm";

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

  if(student.donors === undefined){
    return null
  }else{

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
                  <tr key={uuidv4()}>
                    <td>{donor.first_name} {donor.last_name}</td>
                    <td>${donor.donation}</td>
                    <td>
                      <button className='Button2'>Yes/No</button>
                    </td>
                    <td>
                      <button className='Delete-button'>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
    </div>
  )}

}

export default DonorsList;