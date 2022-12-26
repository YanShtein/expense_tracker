import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 15000,
  expenses: [
    { id: 1, 
      title: 'Hotel in the bahamas', 
      amount: 1800, 
      category: 'Travel', 
      activity: 'expense',
      date: '01-12-2020',
      color: '#9bbb58',
    },
    { id: 2, 
      title: 'Salary', 
      amount: 1550, 
      category: 'Other', 
      activity: 'income',
      date: '23-04-2022',
      color: '#05682d',
    },
    { id: 3, 
      title: 'Adidas shoes', 
      amount: 1550, 
      category: 'Shopping', 
      activity: 'expense',
      date: '25-07-2022',
      color: '#c05150',
    },
    { id: 4, 
      title: 'Restaurant at Brothers', 
      amount: 80, 
      category: 'Food', 
      activity: 'expense',
      date: '25-08-2022',
      color: '#8165a3'
    },
  ]
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(state)
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