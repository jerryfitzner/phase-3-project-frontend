import React, { useState } from "react";
import DonorsList from "./DonorsList";
import { v4 as uuidv4 } from 'uuid';


function Student ({students}){


  

  return(
    <div>
      {students.map((student) => (
        <div className="Student-pad" key={uuidv4()}>
         <div>
          <table className='Table, Student-header'>
           <thead>
            <tr>
              <th>{student.first_name} {student.last_name}</th>
              <th>Age: {student.age}</th>
              <th>
               {/* <button className='Button1'>Donate</button> */}
              </th>
            </tr>
           </thead>
          </table>
        </div>
        <DonorsList student={student}/>
        </div>
      ))}
    </div>
  )

}

export default Student;