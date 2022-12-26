import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import { PieChart } from 'react-minimal-pie-chart';

export default function Statistics() {
  const { budget, expenses } = useContext(AppContext);

  let pieChartData = expenses.map(item => {
    return {
      color: item.color,
      value: item.amount,
      key: item.id,
      title: item.category,
    }
  })
  console.log(pieChartData)

  return (
    <div className='statistics'>
      <h4>Total {budget}$</h4>
      <div className='statistics_chart'>
        <PieChart 
          data={[...pieChartData]} 
          label={data => data.dataEntry.title}
          lineWidth={40}
          radius={40}
          labelPosition={80}
          labelStyle={{
            fontSize: "4px",
            fontColor: "FFFFFA",
          }}
          />
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
