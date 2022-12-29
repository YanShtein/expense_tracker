import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { deleteSvg } from '../../svg';

export default function HistoryItem({ item }) {
  const { dispatch } = useContext(AppContext);

  function handleDeleteExpense(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  return (
    <div className="history-item" key={item.id}>
        {
          item.activity === 'expense' ? 
            <span className={'red'}>-</span> :
            <span className={'green'}>+</span>
        }
        <div className="title-date">
          <span>{item.title}</span>
          <span>{item.date}</span>
        </div>
        <span className="amount">{item.amount}$</span>
        <button onClick={() => handleDeleteExpense(item.id)}>{deleteSvg}</button>
    </div>
  )
};
