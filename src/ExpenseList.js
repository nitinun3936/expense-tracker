import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

function ExpenseList({ expenses, deleteExpense, setExpenseToEdit }) {
    return (
        <List>
            {expenses.map(expense => (
                <ListItem key={expense.id}>
                    <ListItemText primary={expense.title} secondary={`$${expense.amount} - ${expense.date}`} />
                    <IconButton onClick={() => setExpenseToEdit(expense)}><EditIcon /></IconButton>
                    <IconButton onClick={() => deleteExpense(expense.id)}><DeleteIcon /></IconButton>
                </ListItem>
            ))}
        </List>
    );
}

export default ExpenseList;
