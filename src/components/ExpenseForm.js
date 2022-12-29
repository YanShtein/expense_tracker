import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";
const shortid = require('shortid');

export default function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [activity, setActivity] = useState();
  const { dispatch } = useContext(AppContext);
  
  function onSubmit(e) { 
    e.preventDefault();
    const expense = {
      id: shortid.generate(),
      title: title,
      amount: amount,
      activity: activity,
      date: new Date().toLocaleString(),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    resetForm();
  };

  function resetForm() {
    setTitle('');
    setAmount('');
    setActivity('');
  };

  return (
    <div className="add-expense">
      <h3>Add expense</h3>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="Title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          />
        <input 
          placeholder="Amount"
          type="number" 
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          required
          />
        <select name="activity" onChange={e => setActivity(e.target.value)} required>
          <option value="">Expense / Income</option>
          <option value="expense">- Expense</option>
          <option value="income">+ Incomse</option>
        </select>
        <button type="submit">Create expense</button>
      </form>
    </div>
  )
};
