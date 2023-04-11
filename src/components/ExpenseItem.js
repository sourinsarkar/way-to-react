import React from 'react'
import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
    <div className="expense-item" >
        <div>Jan 1, 2023</div>
        <div className="expense-item__description" >
            <h2>Car Insurance</h2>
            <div className="expense-item__price">25000</div>
        </div>
    </div>
  )
}
