import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    // console.log(expenseData);
    props.onSaveNewExpense(expenseData);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          stopEditingHandler={stopEditingHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
