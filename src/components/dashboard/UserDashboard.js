import React, { useState } from 'react';
import Wallet from './Wallet';
import AddFunds from './AddFunds';
import TransferFunds from './TransferFunds';
import WithdrawFunds from './WithdrawFunds';
import TransactionHistory from './TransactionHistory';
import UserProfile from './UserProfile';
import TradingViewWidget from './TradingViewWidget';

const UserDashboard = () => {
  const [balance, setBalance] = useState(0.00);
  const [transactions, setTransactions] = useState([]);

  const handleTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1>Welcome to your NesBank Dashboard</h1>
      <p>Manage your account, view transactions</p>
      <UserProfile />
      <Wallet balance={balance} setBalance={setBalance} />
      <AddFunds balance={balance} setBalance={setBalance} />
      <TransferFunds balance={balance} setBalance={setBalance} />
      <WithdrawFunds balance={balance} setBalance={setBalance} />
      <TransactionHistory transactions={transactions} />
      <TradingViewWidget /> {/* TradingView widget */}
    </div>
  );
};

export default UserDashboard;
