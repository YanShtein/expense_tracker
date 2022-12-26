import { createContext, useReducer } from "react";
const shortid = require('shortid');
// shortid.generate();

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 15000,
  expenses: [
    { id: 0, 
      title: 'Hotel in the bahamas', 
      amount: 1800, 
      category: 'Travel', 
      activity: 'expense',
      date: '01-12-2020',
    },
    { id: 1, 
      title: 'Salary', 
      amount: 1550, 
      category: 'Other', 
      activity: 'income',
      date: '23-04-2022',
    },
    { id: 2, 
      title: 'Bought Adidas shoes', 
      amount: 1550, 
      category: 'shopping', 
      activity: 'expense',
      date: '25-07-2022',
    },
  ]
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
      }}>
        {children}
    </AppContext.Provider>
  )
};