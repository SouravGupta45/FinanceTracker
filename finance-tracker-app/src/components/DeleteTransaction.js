// frontend/src/components/DeleteTransaction.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { deleteTransaction, deleteAllTransactions } from '../services/api';
import '../css/DeleteTransaction.css'; // Import your CSS file

const DeleteTransaction = () => {
  const [transactionIdToDelete, setTransactionIdToDelete] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDeleteAllModalOpen, setDeleteAllModalOpen] = useState(false);

  const openDeleteAllModal = () => {
    setDeleteAllModalOpen(true);
  };

  const closeDeleteAllModal = () => {
    setDeleteAllModalOpen(false);
  };

  const handleDelete = () => {
    if (!transactionIdToDelete.trim()) {
      setErrorMessage('Please enter a valid transaction ID.');
      return;
    }

    deleteTransaction(transactionIdToDelete)
      .then((response) => {
        console.log('Transaction deleted successfully');
        setTransactionIdToDelete('');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error deleting transaction:', error);
        setErrorMessage('Error deleting transaction. Please try again.');
      });
  };

  const handleDeleteAll = () => {
    deleteAllTransactions()
      .then((response) => {
        console.log('All transactions deleted successfully');
        setErrorMessage('');
        closeDeleteAllModal(); // Close the modal after successful deletion
      })
      .catch((error) => {
        console.error('Error deleting all transactions:', error);
        setErrorMessage('Error deleting all transactions. Please try again.');
        closeDeleteAllModal(); // Close the modal in case of an error
      });
  };

  return (
    <div>
      <h2>Delete Transactions</h2>
      <label>
        Transaction ID:
        <input
          type="text"
          value={transactionIdToDelete}
          onChange={(e) => setTransactionIdToDelete(e.target.value)}
        />
      </label>
      <br />
      <button className="delete-button" onClick={handleDelete}>
        Delete Transaction
      </button>

      <button className="delete-all-button" onClick={openDeleteAllModal}>
        Delete All Transactions
      </button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Modal for Delete All Confirmation */}
      <Modal
        isOpen={isDeleteAllModalOpen}
        onRequestClose={closeDeleteAllModal}
        contentLabel="Delete All Transactions"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <h2>Confirm Delete All</h2>
          <p>Are you sure you want to delete all transactions?</p>
          <button className="confirm-button" onClick={handleDeleteAll}>
            Yes, Delete All
          </button>
          <button className="cancel-button" onClick={closeDeleteAllModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteTransaction;
