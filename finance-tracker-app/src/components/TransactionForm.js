import React, { useState } from 'react';
import { addTransaction } from '../services/api';
import '../css/TransactionForm.css';

const TransactionForm = ({ onTransactionAdded }) => {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: 0,
    timestamp: null,
  });

  const handleAddTransaction = () => {
    setNewTransaction((prevTransaction) => ({
      ...prevTransaction,
      timestamp: new Date(),
    }));

    addTransaction(newTransaction)
      .then((response) => {
        onTransactionAdded(response.data);
        setNewTransaction({ description: '', amount: 0, timestamp: null });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2>Add a Transaction</h2>
      <label>
        Description:
        <input
          type="text"
          value={newTransaction.description}
          placeholder="Enter description..."
          onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={newTransaction.amount === 0 ? '' : newTransaction.amount}
          placeholder="Enter amount..."
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: parseFloat(e.target.value) })}
        />
      </label>
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
};

export default TransactionForm;
