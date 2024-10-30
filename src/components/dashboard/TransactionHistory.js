import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.type} of {transaction.amount}
            </li>
          ))
        ) : (
          <li>No transactions available.</li>
        )}
      </ul>
    </div>
  );
};

export default TransactionHistory;
