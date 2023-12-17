// frontend/src/components/Navbar.js
import React from 'react';
import '../css/Navbar.css'
const Navbar = ({ onComponentChange }) => {
  const handleOptionClick = (option) => {
    onComponentChange(option);
  };

  return (
    <div className="navbar-container">
      <h2 className="logo">Finance Tracker</h2>
      <div className="button-container">
        <button onClick={() => handleOptionClick('add')}>Add Transaction</button>
        <button onClick={() => handleOptionClick('delete')}>Delete Transaction</button>
        <button onClick={() => handleOptionClick('showAll')}>Show All Transactions</button>
      </div>
    </div>
  );
};

export default Navbar;
