import React from 'react';
import "./Transaction.css"
import axios from 'axios';

export default function Transaction(props) {
    const deleteTransaction=()=>{
        console.log(props)
        props.deleteTransaction(props.transaction.id)
      }


    return (
        <div className="transaction" key={props.transaction.id}>
            <span >{props.transaction.amount} </span>
            <span >{props.transaction.category} </span>
            <span >{props.transaction.vendor} </span>
            <span>
            <button className='deleteButton' onClick={deleteTransaction}> delete </button>
            </span>
        </div>
  )
}