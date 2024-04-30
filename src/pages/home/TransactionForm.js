import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
    const [name, setname] = useState('');
    const [amount, setAmount] = useState('');
    const { addDocument } = useFirestore('transaction');

    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({
            uid,
            name,
            amount
        });
    };

    return (
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction Name:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setname(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Amount ($):</span>
                    <input
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button>Add Transaction</button>
            </form>
        </>
    );
}
