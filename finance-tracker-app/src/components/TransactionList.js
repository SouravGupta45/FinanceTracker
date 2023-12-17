// frontend/src/components/TransactionList.js
import React, { useState, useEffect } from 'react';
import { getAllTransactions } from '../services/api';
import '../css/TransactionList.css';
const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getAllTransactions()
      .then(response => setTransactions(response.data))
      .catch(error => console.error(error));
  }, [setTransactions]);

  return (
    <div className="table-container">
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction._id}>
            <td>{transaction._id}</td>
            <td>{transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default TransactionList;
