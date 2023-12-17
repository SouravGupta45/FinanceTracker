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

  const handleTransactionAdded = (newTransaction) => {
    // You can perform additional actions when a transaction is added
    console.log('Transaction added:', newTransaction);
  };

  return (
    <div className="app-container">
      <Navbar onComponentChange={handleComponentChange} />
      <div className="main-content">
        {selectedComponent === 'add' && <TransactionForm onTransactionAdded={handleTransactionAdded} />}
        {selectedComponent === 'delete' && <DeleteTransaction />}
        {selectedComponent === 'showAll' && <TransactionList />}
      </div>
    </div>
  );
};

export default App;
