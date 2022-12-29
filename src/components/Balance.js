import { useContext } from "react"
import { AppContext } from "./context/AppContext"

export default function Balance() {
  const { budget } = useContext(AppContext);

  return (
    <div className="balance">
      <h4>Your balance</h4>
      <span className="budget">${budget}</span>
      <div className="income-expense">
        <div>
          <h4>INCOME</h4>
          <span className="green">$100</span>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <span className="red">$500</span>
        </div>
      </div>
    </div>
  )
};
