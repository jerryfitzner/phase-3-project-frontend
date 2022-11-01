import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function DonorsList ({student}){
  const [donorForm, setDonorForm] = useState({
    first_name: '',
    last_name: '',
    donation: '',
    donation_received: false,
    student_id: student.id
  })

  const donors = student.donors;

  // console.log(student.id)

  if(student.donors === undefined){
    return null
  }else{

  return(
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
  )}

}

export default DonorsList;