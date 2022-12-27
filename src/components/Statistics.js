import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { PieChart } from 'react-minimal-pie-chart';

export default function Statistics() {
  const { budget, expenses, categoryColor } = useContext(AppContext);

  function chartDetails(category) {
    let categoryName = category;
    let reducedAmount = expenses
      .filter(item => item.category === category)
      .reduce((a, b) => a + b.amount, 0);
    return [`${categoryName} ${reducedAmount}`];
  };

  let pieChartData = expenses.map(item => {
    return {
      color: item.color,
      value: item.amount,
      key: item.id,
      title: item.category,
    }
  });

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
            fontSize: "3px",
            fontColor: "FFFFFA",
          }}
        />
      </div>
      <div className='statistics_details'>
        <h3>Chart Details</h3>
        <div className="statistics_details_list">
          <li><span style={{color: categoryColor('Shopping')}}>•</span> {chartDetails('Shopping')}$</li>
          <li><span style={{color: categoryColor('Travel')}}>•</span> {chartDetails('Travel')}$</li>
          <li><span style={{color: categoryColor('Food')}}>•</span> {chartDetails('Food')}$</li>
          <li><span style={{color: categoryColor('Health')}}>•</span> {chartDetails('Health')}$</li>
          <li><span style={{color: categoryColor('Education')}}>•</span> {chartDetails('Education')}$</li>
          <li><span style={{color: categoryColor('Other')}}>•</span> {chartDetails('Other')}$</li>
        </div>
      </div>
    </div>
  )
};
