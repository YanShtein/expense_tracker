const initialState = {
  expenses: [
    { id: 1, 
      title: 'Food', 
      amount: 850, 
      activity: 'expense',
      date: new Date().toLocaleString(),
    },
    { id: 2, 
      title: 'Salary', 
      amount: 1500, 
      activity: 'income',
      date: new Date().toLocaleString(),
    },
    { id: 3, 
      title: 'Shoes', 
      amount: 150, 
      activity: 'expense',
      date: new Date().toLocaleString(),
    },
  ],
};

export default initialState;
