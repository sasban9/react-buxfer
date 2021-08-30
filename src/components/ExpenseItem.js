import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>28 Mar 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">₹ 11029</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
