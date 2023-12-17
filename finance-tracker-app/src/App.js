// frontend/src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TransactionForm from './components/TransactionForm';
import DeleteTransaction from './components/DeleteTransaction';
import TransactionList from './components/TransactionList';
import './App.css';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('add');

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="app-container">
      <Navbar onComponentChange={handleComponentChange} />
      <div className="main-content">
        {selectedComponent === 'add' && <TransactionForm />}
        {selectedComponent === 'delete' && <DeleteTransaction />}
        {selectedComponent === 'showAll' && <TransactionList />}
      </div>
    </div>
  );
};

export default App;
