import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';

function AddExpenseModal({ addExpense }) {
    const [open, setOpen] = useState(false);
    const [expense, setExpense] = useState({ title: '', amount: 0, category: '', date: '' });

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        addExpense(expense);
        setOpen(false);
        setExpense({ title: '', amount: 0, category: '', date: '' }); // Reset form
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Add Expense</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={{ padding: 20 }}>
                    <TextField name="title" label="Title" value={expense.title} onChange={handleChange} />
                    <TextField name="amount" type="number" label="Amount" value={expense.amount} onChange={handleChange} />
                    <TextField name="category" label="Category" value={expense.category} onChange={handleChange} />
                    <TextField name="date" type="date" label="Date" value={expense.date} onChange={handleChange} />
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </div>
            </Modal>
        </>
    );
}

export default AddExpenseModal;
