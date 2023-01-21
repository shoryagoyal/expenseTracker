import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// https://expense-tracker-d3fa7.web.app
const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    // This is JSX code. (JSX - JavaScript XML). This is HTML code written inside JavaScript
    <div>
      <Header />
      <NewExpense onSaveNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      <Footer />
    </div>
  );
}

export default App;

// In react we build our custom HTML elements which are called components.

// React is declarative instead of imperative

// Imperative apprroach - In this we tell each step od code. Eg - To append a element inside a dom step 1) - Create element Step 2) Assign text content Step 3) Append element to DOM

// Components in react is just a function in JavaScript

// You should have only one root statement per component.

// Lecture - 34 = Use className instead of class to assign class to a HTML element in react

// Always try to write logic outside of the JSX component.
