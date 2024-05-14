import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField } from '@mui/material';

function EditExpenseModal({ expenseToEdit, updateExpense }) {
    const [open, setOpen] = useState(false);
    // Initialize expense with a valid object structure to avoid destructuring errors
    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        category: '',
        date: ''
    });

    useEffect(() => {
        if (expenseToEdit) {
            setExpense(expenseToEdit);
        }
    }, [expenseToEdit]);

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (expense.id) {
            updateExpense(expense.id, expense);
        }
        setOpen(false);
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Edit Expense</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={{ padding: 20 }}>
                    <TextField name="title" label="Title" value={expense.title || ''} onChange={handleChange} />
                    <TextField name="amount" type="number" label="Amount" value={expense.amount || ''} onChange={handleChange} />
                    <TextField name="category" label="Category" value={expense.category || ''} onChange={handleChange} />
                    <TextField name="date" type="date" label="Date" value={expense.date || ''} onChange={handleChange} />
                    <Button onClick={handleSubmit}>Update</Button>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </div>
            </Modal>
        </>
    );
}

export default EditExpenseModal;
