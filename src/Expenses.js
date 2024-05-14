import React from 'react';

function Expenses({ totalExpenses }) {
    return (
        <div className="expenses-display">
            <h2>Expenses: ₹{totalExpenses}</h2>
        </div>
    );
}

export default Expenses;
