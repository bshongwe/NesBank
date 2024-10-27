import React from 'react';

const TransferFunds = () => {
  return (
    <div>
      <h2>Transfer Funds</h2>
      <form>
        <label>
          Recipient:
          <input type="text" name="recipient" />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" />
        </label>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default TransferFunds;