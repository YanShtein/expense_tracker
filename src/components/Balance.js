import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function Balance() {
  const { expenses } = useContext(AppContext);

  const reduceExpense = expenses.filter(item => item.activity === 'expense').reduce((a, b) => a + b.amount, 0).toFixed(2);
  const reduceIncome = expenses.filter(item => item.activity === 'income').reduce((a, b) => a + b.amount, 0).toFixed(2);

  const balance = expenses.map(item => item.activity === 'expense' ? -item.amount : item.amount)
  .reduce((a, b) => a + b, 0).toFixed(2);

  return (
    <div className="balance">
      <h4>Your balance</h4>
      <span className="balanceVal">${balance}</span>
      <div className="income-expense">
        <div>
          <h4>INCOME</h4>
          <span className="green">${reduceIncome}</span>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <span className="red">${reduceExpense}</span>
        </div>
      </div>
    </div>
  )
};
