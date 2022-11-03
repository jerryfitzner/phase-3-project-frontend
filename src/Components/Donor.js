import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Donor ({donor, onDeleteDonor}) {

  const handleDelete = () => {
    fetch(`http://localhost:9292/donors/${donor.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedDonor => onDeleteDonor(deletedDonor.id))
  }





  return(
    
      <tr key={uuidv4()}>
                    <td>{donor.first_name} {donor.last_name}</td>
                    <td>${donor.donation}</td>
                    <td>
                      <button className='Button2'>Yes/No</button>
                    </td>
                    <td>
                      <button className='Delete-button' onClick={handleDelete} id={donor.id}>X</button>
                    </td>
                  </tr>
    
  )
}

export default Donor;