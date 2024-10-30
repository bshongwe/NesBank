import React, { useState } from 'react';
import Wallet from './Wallet';
import AddFunds from './AddFunds';
import TransferFunds from './TransferFunds';
import WithdrawFunds from './WithdrawFunds'; // Imports WithdrawFunds component
import TransactionHistory from './TransactionHistory';
import UserProfile from './UserProfile'; // Import UserProfile component

const UserDashboard = () => {
  const [balance, setBalance] = useState(0.00); // Initial balance
  const [transactions, setTransactions] = useState([]);

  const handleTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1>Welcome to your NesBank Dashboard</h1>
      <p>Manage your account, view transactions</p>
      {/* Dashboard features here */}
      <UserProfile /> {/* Adds UserProfile component */}
      <Wallet balance={balance} setBalance={setBalance} />
      <AddFunds balance={balance} setBalance={setBalance} />
      <TransferFunds balance={balance} setBalance={setBalance} />
      <WithdrawFunds balance={balance} setBalance={setBalance} /> {/* Adds WithdrawFunds component */}
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default UserDashboard;
