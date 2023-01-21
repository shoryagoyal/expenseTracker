import { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  // We set default value of entered title as empty string because inititally no input is entered
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // Another way of updating the three state is by creating a class of all the three user input
  // But the problem here is that whenever a single state is updated we need to update all the three values

  //   const [userInput, setUserInput]  = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });
  const titleChangeHandler = (event) => {
    // We get this event object as changes occur in the input field
    setEnteredTitle(event.target.value);
    // setUserInput( {
    //     Spread operator used to extract previous object data and then we update the enteredTitle attribute
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })

    // Whenever you want to update a state that depends on the previous state you need to use an alternate syntax of setUserInput
    // In the above approach of using setUserInput() directly it might be possible that your app is going through many state update but using function approach react will make sure that you get the previous state value which is latest
    // setUserInput((prevState) => {
    //       return {...prevState, enteredTitle: event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    // We get this event object as changes occur in the input field
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // We get this event object as changes occur in the input field
    setEnteredAmount(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseDate(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tile</label>
          <input
            type="text"
            value={
              enteredTitle
            } /* Used to clear input when the form is submitted. When the form is submitted we set the title, amount and date to empty string and value attribue of form will be used to reflect the changes*/
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditingHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
