import React, { useState, useEffect } from 'react';

// Wallet Managing Component: balance and transactions
const Wallet = ({ balance, setBalance, transactions, setTransactions }) => {
  // State tracks amount entered by user
  const [amount, setAmount] = useState('');

  // useEffect hook to fetch wallet information when component mounts
  useEffect(() => {
    fetchWalletInfo();
  }, []);

  // Fetches wallet info from backend API
  const fetchWalletInfo = async () => {
    try {
      const response = await fetch('/api/wallet'); // wallet API endpoint
      const data = await response.json();
      setBalance(data.balance); // updates balance state
      setTransactions(data.transactions); // updates transactions state
    } catch (error) {
      console.error('Error fetching wallet info:', error);
    }
  };

  // Handles fund additions to wallet
  const handleAddFunds = () => {
    setBalance(balance + parseFloat(amount)); // Updates balance
    setTransactions([...transactions, { type: 'deposit', amount: parseFloat(amount) }]); // Logs transaction
    setAmount(''); // Clears input field
  };

  // Handles fund transfers from wallet
  const handleTransferFunds = () => {
    if (balance >= parseFloat(amount)) {
      setBalance(balance - parseFloat(amount)); // Update the balance
      setTransactions([...transactions, { type: 'transfer', amount: parseFloat(amount) }]); // Logs transaction
      setAmount(''); // Clear the input field
    } else {
      alert('Insufficient balance'); // Alert if balance is insufficient
    }
  };

  // Handles fund withdrawals from wallet
  const handleWithdrawFunds = () => {
    const withdrawalAmount = parseFloat(amount);
    if (withdrawalAmount > balance) {
      alert("Insufficient balance"); // Insufficient funds alert
    } else {
      setBalance(balance - withdrawalAmount); // Updates balance
      setTransactions([...transactions, { type: 'withdrawal', amount: withdrawalAmount }]); // Logs transaction
      setAmount(''); // Clears input field
    }
  };

  return (
    <div>
      <h2>Wallet Balance</h2>
      <p>Your current wallet balance is: ${balance.toFixed(2)}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleAddFunds}>Add Funds</button>
      <button onClick={handleTransferFunds}>Transfer Funds</button>
      <button onClick={handleWithdrawFunds}>Withdraw Funds</button>
    </div>
  );
};

export default Wallet;
