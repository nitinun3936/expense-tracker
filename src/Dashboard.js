// Dashboard.js
import React, { useState, useEffect } from 'react';
import WalletBalance from './WalletBalance';
import Expenses from './Expenses';
import AddExpenseModal from './AddExpenseModal';
import ExpenseList from './ExpenseList';
import TopExpenses from './TopExpenses';
import './Dashboard.css'; // Assuming you are using CSS for styling

function Dashboard() {
    const [expenses, setExpenses] = useState([]);
    const [walletBalance, setWalletBalance] = useState(5000);
    const [showModal, setShowModal] = useState(false);

    // Load data from localStorage or API
    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
        const storedBalance = localStorage.getItem('walletBalance') || 5000;
        setWalletBalance(parseInt(storedBalance, 10));
    }, []);

    // Handle adding a new expense
    const addExpense = (newExpense) => {
        if (newExpense.amount <= walletBalance) {
            const updatedExpenses = [...expenses, newExpense];
            setExpenses(updatedExpenses);
            setWalletBalance(walletBalance - newExpense.amount);
            localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            localStorage.setItem('walletBalance', walletBalance - newExpense.amount);
        } else {
            alert("Insufficient funds");
        }
        setShowModal(false);
    };

    return (
        <div className="dashboard">
            <WalletBalance balance={walletBalance} />
            <Expenses totalExpenses={expenses.reduce((acc, curr) => acc + curr.amount, 0)} />
            <button onClick={() => setShowModal(true)}>Add Expense</button>
            {showModal && <AddExpenseModal onSave={addExpense} onCancel={() => setShowModal(false)} />}
            <ExpenseList expenses={expenses} setExpenses={setExpenses} />
            <TopExpenses expenses={expenses} />
        </div>
    );
}

export default Dashboard;
