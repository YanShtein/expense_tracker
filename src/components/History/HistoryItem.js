import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function HistoryItem({ id, title, amount, activity, date }) {
  const { dispatch } = useContext(AppContext);

  function handleDeleteExpense(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  return (
    <div className="history-item" key={id}>
        {
          activity === 'expense' ? 
            <span className={'red'}>-</span> :
            <span className={'green'}>+</span>
        }
        <div className="title-date">
          <span>{title}</span>
          <span>{date}</span>
        </div>
        <span className="amount">{amount}$</span>
        <button onClick={() => handleDeleteExpense(id)}>Del</button>
    </div>
  )
};
