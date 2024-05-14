import React from 'react';

function WalletBalance({ balance, addIncome }) {
  return (
    <div className="wallet-balance">
      <h2>Wallet Balance: ₹{balance}</h2>
      <button onClick={addIncome}>+ Add Income</button>
    </div>
  );
}

export default WalletBalance;
