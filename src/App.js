import ExpenseForm from "./components/ExpenseForm";
import History from "./components/History/History";
import Statistics from "./components/Statistics";
import { AppProvider } from "./components/context/AppContext";


function ExpenseTracker() {
  return (
    <div className="container">
      <div className="header">
        <h2>Expense Tracker App</h2>
      </div>
      <ExpenseForm />
      <History />
      <Statistics />
    </div>
  );
};

function App() {
  return (
    <div className="App">
    <AppProvider>
      <ExpenseTracker />
    </AppProvider>  
    </div>
  );
}

export default App;
