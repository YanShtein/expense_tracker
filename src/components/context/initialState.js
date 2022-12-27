const initialState = {
  budget: 15000,
  expenses: [
    { id: 1, 
      title: 'Hotel in the bahamas', 
      amount: 1200, 
      category: 'Travel', 
      activity: 'expense',
      date: '01-12-2020',
      color: categoryColor('Travel')
    },
    { id: 2, 
      title: 'Salary', 
      amount: 1550, 
      category: 'Other', 
      activity: 'income',
      date: '23-04-2022',
      color: categoryColor('Other')
    },
    { id: 3, 
      title: 'Adidas shoes', 
      amount: 250, 
      category: 'Shopping', 
      activity: 'expense',
      date: '25-07-2022',
      color: categoryColor('Shopping')
    },
    { id: 4, 
      title: 'Perfume', 
      amount: 300, 
      category: 'Shopping', 
      activity: 'expense',
      date: '25-07-2022',
      color: categoryColor('Shopping')
    },
    { id: 5, 
      title: 'Scool of Arts', 
      amount: 90, 
      category: 'Education', 
      activity: 'expense',
      date: '25-10-2022',
      color: categoryColor('Education')
    },
    { id: 6, 
      title: 'Visit to a doctor', 
      amount: 25, 
      category: 'Health', 
      activity: 'expense',
      date: '30-10-2022',
      color: categoryColor('Health')
    },
  ],
};

function categoryColor(category) {
  switch (category) {
    case 'Shopping':
      return '#c05150';
    case 'Other':
      return '#b3b2b2';
    case 'Food':
      return '#8165a3';
    case 'Travel':
      return '#9bbb58';
    case 'Health':
      return '#db843c';
    case 'Education':
      return '#4298af';
    default:
      return '';
  };
};

export default initialState;
export { categoryColor };