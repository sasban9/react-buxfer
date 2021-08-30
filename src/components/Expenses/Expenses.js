import { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />
        {props.items.map((expense, i) => (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={parseFloat(expense.amount).toFixed(2)}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
