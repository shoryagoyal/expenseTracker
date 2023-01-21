import "./Card.css";
// This component is created in order to remove style duplication in Expenses.css and ExpenseItem.css
// In both the file duplication of border radius and box shadow was there
// Not that important to split this in seperate component
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
