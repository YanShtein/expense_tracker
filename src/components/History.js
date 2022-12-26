import { useContext } from "react"
import { AppContext } from "./context/AppContext"


export default function History() {
  const { expenses } = useContext(AppContext);

  return (
    <div className="history">
      <h3>History</h3>
      <div className="history_list">
        {
          expenses.map(item => {
            return (
              <li key={item.id}>
                {item.activity === 'expense' ? 
                <span className={'red'}>-</span> :
                <span className={'green'}>+</span>
                }
                <span>{item.title}</span>
                <span>{item.amount}$</span>
                <span>{item.category}</span>
                <span>{item.date}</span>
                <button>Del</button>
              </li>
            )
          })
        }
      </div>
    </div>
  )
};
