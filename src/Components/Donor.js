import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Donor ({donor, onDeleteDonor}) {
  const [isDonate, setIsDonate] = useState(donor.donation_received)

  

  const handleDelete = () => {
    fetch(`http://localhost:9292/donors/${donor.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedDonor => onDeleteDonor(deletedDonor.id))
  }

  const handleClick = () => {
    fetch(`http://localhost:9292/donors/${donor.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "donation_received": !isDonate
      })
    })
    .then(r => r.json())
    .then(data => setIsDonate(data.donation_received))
  }

  return(
    
      <tr key={uuidv4()}>
        <td>{donor.first_name} {donor.last_name}</td>
        <td>${donor.donation}</td>
        <td>
          <button className={isDonate ? "Button2" : "Button3"} onClick={handleClick}>{isDonate ? "Yes" : "No"}</button>
        </td>
        <td>
          <button className='Delete-button' onClick={handleDelete} id={donor.id}>X</button>
        </td>
       </tr>
  )
}

export default Donor;