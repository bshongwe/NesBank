const express = require('express');
const connectDB = require('./db');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Your existing server setup...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});