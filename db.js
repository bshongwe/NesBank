const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const connectWithRetry = () => {
    console.log('MongoDB connection with retry');
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Ensures indexes are created
      useFindAndModify: false, // Uses native findOneAndUpdate instead
      autoReconnect: true, // Enables auto-reconnect
      reconnectTries: Number.MAX_VALUE, // Retries indefinitely
      reconnectInterval: 5000, // Retries every 5 seconds
    }).then(() => {
      console.log('MongoDB is connected');
    }).catch(err => {
      console.error('MongoDB connection unsuccessful, retrying in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
    });
  };

  connectWithRetry();

  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
  });

  mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Attempting to reconnect...');
  });
};

module.exports = connectDB;
