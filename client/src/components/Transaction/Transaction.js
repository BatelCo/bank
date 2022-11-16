import React from 'react';
import "./Transaction.css"

export default function Transaction(props) {
    // const deleteTransaction=()=>{
    //     props.deleteTransaction(props.transaction.id, props.transaction.amount)
    // }
    return (
        <div className="transaction">
            <span className="font-effect-shadow-multiple">{props.transaction.amount} </span>
            <span className="font-effect-shadow-multiple">{props.transaction.category} </span>
            <span className="font-effect-shadow-multiple">{props.transaction.vendor} </span>
            <span>
            {/* <button className='deleteButton' onClick={deleteTransaction}>X</button> */}
            </span>
        </div>
  )
}