import { useState } from 'react'

const RetrieveInfo = () => {

 const [aadhar, setAadhar] = useState('');
 const [person, setPerson] = useState(null);
 const [message, setMessage] = useState('');


 const handleRetrieve = () => {
    const people = JSON.parse(localStorage.getItem('people')) || [];
    const foundPerson = people.find(p => p.aadhar === aadhar);

    if(foundPerson){
        setPerson(foundPerson);
        setMessage('');

    } else {
        setPerson(null);
        setMessage('Not match found');
    }
 };






  return (
    <div>
      <h2>Retrieve Information</h2>
      <div>
        <input type="text" placeholder='Enter Aadhar Number' value={aadhar} onChange={(e) => setAadhar(e.target.value)}/>
        <button onClick={handleRetrieve}>Retrieve</button>
      </div>
      {message && <p>{message}</p>}
      {person && (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Aadhar Number</th>
                    <th>Mobile Number</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Name">{person.name}</td>
                    <td data-label="Date of Birth">{person.dob}</td>
                    <td data-label="Aadhar Number">{person.aadhar}</td>
                    <td data-label="Mobile Number">{person.mobile}</td>
                    <td data-label="Age">{person.age}</td>
                </tr>
            </tbody>
        </table>
      )}
    </div>
  )
}

export default RetrieveInfo
