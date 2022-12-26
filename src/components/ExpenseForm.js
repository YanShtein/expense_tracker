import { useState } from "react";

export default function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState();
  const [date, setDate] = useState('');

  function onSubmit(e) { 
    e.preventDefault();
    console.log(title, amount, category, activity, date)
  }

  return (
    <div className="expense">
      <h3>Create Expanse</h3>
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
          <option value="">Expanse / Income</option>
          <option value="expense">- Expanse</option>
          <option value="income">+ Incomse</option>
        </select>
        <input 
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
