import React from 'react';

function TopExpenses({ expenses }) {
    // Check if expenses is defined and is an array
    if (!Array.isArray(expenses)) {
        return <div>Loading...</div>; // or any other placeholder content
    }

    return (
        <div>
            <h2>Top Expenses</h2>
            {expenses.map(expense => (
                <div key={expense.id}>
                    <p>{expense.category}: ₹{expense.amount}</p>
                </div>
            ))}
        </div>
    );
}

export default TopExpenses;
