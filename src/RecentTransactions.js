import React from 'react';

function RecentTransactions({ transactions, editTransaction, deleteTransaction }) {
  return (
    <div className="recent-transactions">
      <h3>Recent Transactions</h3>
      {transactions.map(transaction => (
        <div key={transaction.id}>
          <span>{transaction.title}</span>
          <span>{transaction.amount}</span>
          <button onClick={() => editTransaction(transaction.id)}>Edit</button>
          <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;
