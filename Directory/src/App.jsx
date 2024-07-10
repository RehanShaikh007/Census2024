
import { useState } from 'react'
import './App.css'
import AddPerson from './components/AddPerson'
import RetrieveInfo from './components/RetrieveInfo';

function App() {
 const [activeTab, setActiveTab]= useState('add');

  return (
    <div className='App'>
      <div className="tabs">
        <button onClick={() => setActiveTab('add')}>Add New Person</button>
        <button onClick={() => setActiveTab('retrieve')}>Retrieve Information</button>
      </div>
      {activeTab === 'add' ? <AddPerson/> : <RetrieveInfo/>}
    </div>
  )
}

export default App
