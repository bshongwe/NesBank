import React, { useState } from 'react';

const TransferFunds = ({ balance, setBalance }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [transferType, setTransferType] = useState('nesbank'); // Default transfer type

  const handleSubmit = (e) => {
    e.preventDefault();
    const transferAmount = parseFloat(amount);
    if (balance >= transferAmount) {
      if (transferType === 'nesbank') {
        // Handle transfer to NesBank client
        transferToNesBankClient(recipient, transferAmount);
      } else {
        // Handle transfer to external beneficiary
        transferToExternalBeneficiary(recipient, transferAmount);
      }
      setBalance(balance - transferAmount);
      setRecipient('');
      setAmount('');
    } else {
      alert('Insufficient balance');
    }
  };

  const transferToNesBankClient = (recipient, amount) => {
    // Simulating an API call to transfer funds to a NesBank client
    fetch(`/api/transfer/nesbank`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipient, amount })
    })
    .then(response => response.json())
    .then(data => {
      console.log(`Transfer to NesBank client ${recipient} successful:`, data);
      // Handle success (e.g., show a success message or update the transaction history)
    })
    .catch(error => {
      console.error('Error transferring to NesBank client:', error);
    });
  };

  const transferToExternalBeneficiary = (recipient, amount) => {
    // Simulating an API call to transfer funds to an external beneficiary
    fetch(`/api/transfer/external`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipient, amount })
    })
    .then(response => response.json())
    .then(data => {
      console.log(`Transfer to external beneficiary ${recipient} successful:`, data);
      // Handle success (e.g., show a success message or update the transaction history)
    })
    .catch(error => {
      console.error('Error transferring to external beneficiary:', error);
    });
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Transfer Type:
          <select value={transferType} onChange={(e) => setTransferType(e.target.value)}>
            <option value="nesbank">NesBank Client</option>
            <option value="external">External Beneficiary</option>
          </select>
        </label>
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
