import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';

function AddIncomeModal({ addIncome }) {
    const [open, setOpen] = useState(false);
    const [income, setIncome] = useState('');

    const handleChange = (e) => {
        setIncome(e.target.value);
    };

    const handleSubmit = () => {
        addIncome(Number(income));
        setOpen(false);
        setIncome(''); // Reset the form
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Add Income</Button>
            <Modal open={open} onClose={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: 'white', padding: 20 }}>
                    <TextField
                        label="Income Amount"
                        type="number"
                        value={income}
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button onClick={handleSubmit} style={{ marginTop: 20 }}>Add Balance</Button>
                    <Button onClick={() => setOpen(false)} style={{ marginTop: 20 }}>Cancel</Button>
                </div>
            </Modal>
        </>
    );
}

export default AddIncomeModal;
