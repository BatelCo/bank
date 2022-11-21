import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';
import "./Operations.css"

export default function Operations(props) {
  return (
    <div>
        <TransactionForm updateBalance={props.updateBalance} balance={props.balance} />
    </div>
  )
}