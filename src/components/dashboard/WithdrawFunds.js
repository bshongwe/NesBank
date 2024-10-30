import React, { useState } from 'react';

const WithdrawFunds = ({ balance, setBalance }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const withdrawalAmount = parseFloat(amount);
    if (withdrawalAmount > balance) {
      alert("Insufficient balance");
    } else {
      setBalance(balance - withdrawalAmount);
      // Update transaction history
      // addTransaction({ type: 'withdrawal', amount: withdrawalAmount });
    }
    setAmount('');
  };

  return (
    <div>
      <h2>Withdraw Funds</h2>
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
        <button type="submit">Withdraw Funds</button>
      </form>
    </div>
  );
};

export default WithdrawFunds;
