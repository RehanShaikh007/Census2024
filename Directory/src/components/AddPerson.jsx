import { useState } from 'react'

const AddPerson = () => {
 const [rows, setRows] = useState([]);
//  const [inputs, setInputs] = useState([]);
 
 const addRow = () => {
    setRows([...rows, {}]);
 };

 const handleChange = (index, event) => {
    const {name, value} = event.target;
    const newRows = [...rows];
    newRows[index] = {...newRows[index], [name]: value };

    if(name === 'dob'){
        const age = calculateAge(value);
        newRows[index]['age'] = age;
    }
    
    setRows(newRows);
 }

 const calculateAge =(dob) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
 };

 const handleSave = (index) => {
    const newRows = [...rows];
    const row = newRows[index];
    
    if(!row.name || !row.dob || !row.aadhar || !row.mobile || !row.age){
        alert("Please fill in all fields");
        return;
    }

    if(row.aadhar.length !== 12){
      alert("Aadhar Number must be 12 digits");
      return;
    }

    if(row.mobile.length !== 10){
        alert("Mobile Number must be 10 digits");
        return;
    }

    let people = JSON.parse(localStorage.getItem('people')) || [];
    people.push(row);
    localStorage.setItem('people', JSON.stringify(people));

    alert('Person saved');
 };

 const handleDelete = (index) => {
    const newRows = [...rows];
    const row = newRows[index];
    newRows.splice(index, 1);

    if(row.saved){
        let people = JSON.parse(localStorage.getItem('people')) || [];
        people = people.filter(person => person.aadhar !== row.aadhar);
        localStorage.setItem('people', JSON.stringify(people));
    }

    setRows(newRows);
 }



  return (
    
    <div>
      <h2>Add New Person</h2>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Aadhar Number</th>
                <th>Mobile Number</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {rows.map((row, index)=>(
                <tr key={index}>
                   <td data-label="Name"><input type="text" name='name' value={row.name || ''} onChange={(e) => handleChange(index, e)} /></td>
                   <td data-label="Date of Birth"><input type="date" name='dob' value={row.dob || ''} onChange={(e) => handleChange(index, e)} /></td>
                   <td data-label="Aadhar Number"><input type="number" name='aadhar' value={row.aadhar || ''} onChange={(e) => handleChange(index, e)} /></td>
                   <td data-label="Mobile Number"><input type="number" name='mobile' value={row.mobile || ''} onChange={(e) => handleChange(index, e)} /></td>
                   <td className='dataAge' data-label="Age"><h3  className='age'>{row.age || ''}</h3></td>
                   <td data-label="Actions" className='actions'>
                    <button className='action1' onClick={() => handleSave(index)}>Save</button>
                    <button className='action2' onClick={() => handleDelete(index)}>Delete</button>
                   </td>
                </tr>
            ))}
        </tbody>
      </table>
      <button className='addnew' onClick={addRow}>Add New Person</button>
    </div>
  )
}

export default AddPerson
