// backend/src/routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Routes for transactions
router.get('/transactions', transactionController.getAllTransactions);
router.post('/transactions', transactionController.addTransaction);
router.delete('/transactions/:id', transactionController.deleteTransaction);
router.delete('/transactions', transactionController.deleteAllTransactions);

module.exports = router;
