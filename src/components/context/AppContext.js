import { createContext, useReducer } from "react";
import initialState from "./initialState";

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      }
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{
        expenses: state.expenses,
        dispatch
      }}>
        {children}
    </AppContext.Provider>
  )
};