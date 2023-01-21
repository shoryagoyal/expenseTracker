import ExpenseItem from "./ExpenseItem";
import "./ExpensesContent.css";

function ExpensesContent(props) {
  if (props.filteredExpenses.length === 0)
    return <h2 className="expenses-list__fallback">No Expenses found</h2>;
  // You can wrap this return below in ul to make it semantically look better
  return props.filteredExpenses.map((expense) => (
    <ExpenseItem
      key={
        expense.id
      } /*We need this key attribut for the efficient working of react as for efficiently render a list of item react need a unique id otherwise react cannot distinguish b/w item of list. In real world we will have some unique id as the data will come from the database.*/
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}

export default ExpensesContent;
