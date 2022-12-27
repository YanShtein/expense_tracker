import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";
const shortid = require('shortid');

export default function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState();
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');
  const { dispatch, categoryColor } = useContext(AppContext);
  
  function onSubmit(e) { 
    e.preventDefault();
    const expense = {
      id: shortid.generate(),
      title: title,
      amount: amount,
      category: category,
      activity: activity,
      date: date,
      color: categoryColor(category),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    dispatch({
      type: 'UPDATE_BUDGET',
      payload: budget,
    })

    resetForm();
  };

  function resetForm() {
    setTitle('');
    setAmount('');
    setActivity('');
    setCategory('');
    setDate('');
    setBudget('');
  };

  return (
    <div className="expense">
      <h3>Create Expanse</h3>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="Starting Budget" 
          type="number"
          value={budget}
          onChange={e => setBudget(Number(e.target.value))}
          />
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
        <select name="category" onChange={e => setCategory(e.target.value)} required>
          <option value="">Choose Category</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
          <option value="Food">Food</option>
          <option value="Education">Education</option>
          <option value="Travel">Travel</option>
          <option value="Other">Other</option>
        </select>
        <select name="activity" onChange={e => setActivity(e.target.value)} required>
          <option value="">Expense / Income</option>
          <option value="expense">- Expense</option>
          <option value="income">+ Incomse</option>
        </select>
        <input 
          placeholder="Enter date"
          type="date" 
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          />
        <button type="submit">Create Item</button>
      </form>
    </div>
  )
};
