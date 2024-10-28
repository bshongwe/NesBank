import React, { useState } from 'react';
import Wallet from './Wallet';
import AddFunds from './AddFunds';
import TransferFunds from './TransferFunds';
import TransactionHistory from './TransactionHistory';

const UserDashboard = () => {
  const [balance, setBalance] = useState(0.00); // Initial balance

  return (
    <div>
      <h1>Welcome to your NesBank Dashboard</h1>
      <p>Manage your account, view transactions</p>
      {/* Dashboard features here */}
      <Wallet balance={balance} setBalance={setBalance} />
      <AddFunds balance={balance} setBalance={setBalance} />
      <TransferFunds balance={balance} setBalance={setBalance} />
      <TransactionHistory />
    </div>
  );
};

export default UserDashboard;