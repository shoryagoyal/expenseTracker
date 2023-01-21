import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesContent from "./ExpensesContent";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        filterChangeHandler={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesContent filteredExpenses={filteredExpenses} />
      {/* {filteredExpenses.length === 0 ? (  // Another way to output data conditionally
        <p>No Expenses found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={
              expense.id
            } // We need this key attribut for the efficient working of react as for efficiently render a list of item react need a unique id otherwise react cannot distinguish b/w item of list. In real world we will have some unique id as the data will come from the database.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
      {/* <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
