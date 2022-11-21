import React from 'react';
import "./Transaction.css"

export default function Transaction(props) {
    const deleteTransaction=()=>{
        props.deleteTransaction(props.transaction.id, -props.transaction.amount)
      }

    return (
        <div className="transaction" key={props.transaction.id}>
            <span className='category'>{props.transaction.category}</span>
            <span className='vendor'>{props.transaction.vendor}</span>
            <span className='amount'>{props.transaction.amount}₪</span>
            <span>
                <button className="delete-btn" onClick={deleteTransaction}>
                <span>Delete</span> 
                </button>
            </span>
        </div>
  )
}