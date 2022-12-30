# Expense tracker app

This project uses React hooks, Context API & Reducer.
The app shows balance, income & expense, and list of transactions added.

App Functionality:
- Add new transactions.
- Delete transactions.
- Update income, expense & balance accordingly.

Files structure:
- src/
  - components/
    - context/
      - AppContext.js (holds reducer and context)
      - initialState.js (used by the context)
    - History/
      - History.js (transaction items)
      - HistoryItem.js
    - Balance.js (shows balance, income & expense)
    - ExpenseForm.js (form that creates transaction based on expense or income)
  - App.js
  - svg.js (exports svgs)  
