import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export default function ExpenseItem(props) {
  let title = props.title;
  const clickHandler = () => {
    title = 'Something something';
    console.log("Just clicked");
  }

  return (
    <Card className="expense-item" >
      <ExpenseDate date={props.date} ></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}