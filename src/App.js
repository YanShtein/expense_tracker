import ExpenseForm from "./components/ExpenseForm";
import History from "./components/History/History";
import { AppProvider } from "./components/context/AppContext";
import Balance from "./components/Balance";


function ExpenseTracker() {
  return (
    <div className="container">
      <div className="expense-tracker">
        <h2>Expense Tracker App</h2>
        <Balance />
        <History />
        <ExpenseForm />
        <footer>
          <small>Designed & Built by 
          <a href="https://github.com/YanShtein/" target="_blank" rel="noreferrer"> Yan Shtein</a></small>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <ExpenseTracker />
    </AppProvider>  
  );
}

export default App;
