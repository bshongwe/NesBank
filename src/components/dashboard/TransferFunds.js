import React, { useState } from 'react';

const TransferFunds = ({ balance, setBalance }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (balance >= parseFloat(amount)) {
      setBalance(balance - parseFloat(amount));
      setRecipient('');
      setAmount('');
    } else {
      alert('Insufficient balance');
    }
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipient:
          <input
            type="text"
            name="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default TransferFunds;