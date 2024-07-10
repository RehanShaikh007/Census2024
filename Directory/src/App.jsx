
import { useState } from 'react'
import './App.css'
import AddPerson from './components/AddPerson'
import RetrieveInfo from './components/RetrieveInfo';

function App() {
 const [activeTab, setActiveTab]= useState('add');

  return (
    <div className='App'>
      <section className='heading'>
      <h1>CENSUS 2024</h1>
    </section>
      <div className="tabs">
        <button className='tabs1' onClick={() => setActiveTab('add')}>Add New Person</button>
        <button className='tabs2' onClick={() => setActiveTab('retrieve')}>Retrieve Information</button>
      </div>
      {activeTab === 'add' ? <AddPerson/> : <RetrieveInfo/>}
    </div>
  )
}

export default App
