import React, { useState } from "react";

function Debit(props) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const transaction = {
      amount: parseFloat(amount),
      description,
      date: new Date().toLocaleString(),
    };
    const updatedBalance = props.accBalance - parseFloat(amount);
    props.setAccBalance(updatedBalance);
    setTransactions([...transactions, transaction]);
    setAmount("");
    setDescription("");
  };

  return (
    <div>
      <h1>Debit Page</h1>
      <p>Your Account Balance: {props.accBalance}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
      <h2>Transactions:</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>Amount: {transaction.amount}</span> &emsp;
            <span> Description: {transaction.description}</span> &emsp;
            <span> Date: {transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Debit;
