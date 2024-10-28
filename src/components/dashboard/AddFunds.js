import React, { useState } from 'react';

const AddFunds = ({ balance, setBalance }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBalance(balance + parseFloat(amount));
    setAmount('');
  };

  return (
    <div>
      <h2>Add Funds</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit">Add Funds</button>
      </form>
    </div>
  );
};

export default AddFunds;