import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";
function ExpenseItem(prop) {
  // Use state uses default value and it return a array of 2 size
  // 1st index stores the pointer to managed value ( Current state value)
  // 2nd index is a function which we can later call to set the title
  // const [title, setTitle] = useState(prop.title);
  // const clickHandler = () => {
  //   When we call setTitle function it give react a indication that this component function must be re-evaluated.
  //   setTitle("Updated");
  // };
  return (
    // Inside these curly braces you can write javascript code
    <Card className="expense-item">
      <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
        <div className="expense-item__price">{prop.amount}</div>
      </div>
      {/* Also place comment inside braces*/}
      {/* If you add parantheses here after function name then JavaScript will
      execute that function as it parse the line */}
      {/*<button onClick={clickHandler}>Change title</button>*/}
    </Card>
  );
}

export default ExpenseItem;
