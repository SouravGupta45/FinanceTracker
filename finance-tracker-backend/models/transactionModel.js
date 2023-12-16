// backend/src/models/transactionModel.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: String,
    default: "01/01/1992",
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
