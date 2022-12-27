import { createContext, useReducer } from "react";
import initialState, { categoryColor } from "./initialState";

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
    case 'UPDATE_BUDGET':
      return {
        ...state,
        budget: action.payload
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
        budget: state.budget,
        expenses: state.expenses,
        categoryColor,
        dispatch
      }}>
        {children}
    </AppContext.Provider>
  )
};