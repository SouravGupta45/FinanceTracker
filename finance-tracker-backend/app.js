require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;


// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(cors());
// Middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - ${req.method} request received for ${req.url} with ${req.body}`);
    next();
  });
  
// Routes
app.use('/api', transactionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
