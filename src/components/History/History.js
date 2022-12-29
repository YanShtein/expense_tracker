import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import HistoryItem from "./HistoryItem";

export default function History() {
  const { expenses } = useContext(AppContext);

  return (
    <div className="history">
      <h3>History</h3>
      <div className="history_list">
        {
          expenses.length === 0 ? <p>Empty!</p> :
          expenses.map(item => <HistoryItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
};
