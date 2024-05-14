import React from 'react';

function ExpenseSummary({ expenses }) {  // Changed from ExpensesSummary to ExpenseSummary
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h3>Total Expenses: ₹{totalExpenses}</h3>
    </div>
  );
}

export default ExpenseSummary;  // Make sure this matches the filename semantics
