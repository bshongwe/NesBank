import React from 'react';
import Wallet from './Wallet';
import AddFunds from './AddFunds';
import TransferFunds from './TransferFunds';
import TransactionHistory from './TransactionHistory';

const UserDashboard = () => {
  return (
    <div>
      <h1>Welcome to your NesBank Dashboard</h1>
      <p>Manage your account, view transactions and more...</p>
      {/* Dashboard features here */}
      <Wallet />
      <AddFunds />
      <TransferFunds />
      <TransactionHistory />
    </div>
  );
};

export default UserDashboard;