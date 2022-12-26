import { useContext } from "react"
import { AppContext } from "./context/AppContext"

export default function Statistics() {
  const { budget, expenses } = useContext(AppContext);


  return (
    <div className='statistics'>
      <div className='statistics_chart'>
        Total {budget}$
      </div>
      <div className='statistics_details'>
        <h3>Chart Details</h3>
        <div className="statistics_details_list">
          {
            expenses.map(item => {
              return (
                <li key={item.id}>
                  <span>• {item.category} {item.amount}</span>
                </li>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};
