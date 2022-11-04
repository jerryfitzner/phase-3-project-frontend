import React, { useState } from "react";
import DonorsList from "./DonorsList";
import { v4 as uuidv4 } from 'uuid';


function Student ({student}){
  const [seeDonors, setSeeDonors] = useState(false);

  const handleDonateClick = () => {
    setSeeDonors(!seeDonors)
  }
   console.log(student)

  return(
    <div>
        <div className="Student-pad" key={uuidv4()}>
         <div>
          <table className='Table, Student-header'>
           <thead>
            <tr>
              <th>{student.first_name} {student.last_name}</th>
              <th>Age: {student.age}</th>
              <th>
               <button className='Button1' onClick={handleDonateClick}>{seeDonors ? 'Hide Donors' : 'See Donors'}</button>
              </th>
            </tr>
           </thead>
          </table>
        </div>
        <DonorsList student={student} seeDonors={seeDonors}/>
        </div>
    </div>
  )

}

export default Student;