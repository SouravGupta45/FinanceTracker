// backend/src/controllers/transactionController.js
const Transaction = require('../models/transactionModel');
const mongoose = require('mongoose');
const { format } = require('date-fns');

// Controller functions for transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const addTransaction = async (req, res) => {
  try {
    const { description, amount } = req.body;
    const formattedDate = format(new Date(), 'dd/MM/yyyy');
    const newTransaction = new Transaction({ 
        _id: new mongoose.Types.ObjectId(),description, amount, timestamp: formattedDate });
    await newTransaction.save();
    res.json(newTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteTransaction = async (req, res) => {
    try {
      const transactionId = req.params.id;
      const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
  
      if (!deletedTransaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
  
      res.json({ message: 'Transaction deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

const deleteAllTransactions = async (req, res) => {
    try {
        const result = await Transaction.deleteMany()
        res.json({
            message: `Deleted ${result.deletedCount} transactions successfully.`,
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
  

module.exports = {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
  deleteAllTransactions
};
