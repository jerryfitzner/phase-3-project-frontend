
import '../App.css';

function App() {




  return (
    // <div className="App, App-header">
    <div>
      <div className='Header'>
        <h1>Student Fundraising</h1>
      </div>
      <div>
        <h2>Add a New Student</h2>
        <form className='Form'>
          <input type="text" value="fixthis" name="firstname" required/>
          <input  type="text" value="fixthis" name="firstname" required/>
          <input  type="number" value="25" name="firstname" required/>
          <button className='Form-button'>Create Student</button>
        </form>
      </div>
      <div>
        <div>
        <table className='Table, Student-header'>
          <thead>
            <tr>
              <th>First Name Last</th>
              <th>Age</th>
             <th>
              <button className='Button1'>Donate</button>
             </th>
            </tr>
          </thead>
        </table>
        </div>
        <div>
        <form className='Form-donate'>
          <input type="text" value="fixthis" name="firstname" required/>
          <input  type="text" value="fixthis" name="firstname" required/>
          <input  type="number" value="25" name="firstname" required/>
          <button className='Form-button'>Submit Donation</button>
        </form>
        </div>
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
             <tr>
                <td>Steve Jobs</td>
                <td>$25</td>
                <td>
                  <button className='Button2'>Yes/No</button>
                </td>
                <td>
                  <button className='Delete-button'>X</button>
                </td>
             </tr>
             <tr>
                <td>Steve Jobs</td>
                <td>$25</td>
                <td>
                  <button className='Button2'>Yes/No</button>
                </td>
                <td>
                  <button className='Delete-button'>X</button>
                </td>
             </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
