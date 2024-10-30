import React, { useState } from 'react';

const Wallet = ({ balance, setBalance }) => {
  const [amount, setAmount] = useState('');

  const handleAddFunds = () => {
    setBalance(balance + parseFloat(amount));
    setAmount('');
  };

  const handleTransferFunds = () => {
    if (balance >= parseFloat(amount)) {
      setBalance(balance - parseFloat(amount));
      setAmount('');
    } else {
      alert('Insufficient balance');
    }
  };

  const handleWithdrawFunds = () => {
    const withdrawalAmount = parseFloat(amount);
    if (withdrawalAmount > balance) {
      alert("Insufficient balance");
    } else {
      setBalance(balance - withdrawalAmount);
      setAmount('');
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