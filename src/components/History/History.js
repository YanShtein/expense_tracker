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
          expenses.map(item => {
            return (
              <HistoryItem 
                key={item.id}
                id={item.id}
                title={item.title}
                amount={item.amount}
                activity={item.activity}
                date={item.date}
              />
            )
          })
        }
      </div>
    </div>
  )
};
