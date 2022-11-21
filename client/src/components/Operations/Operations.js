import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';

export default function Operations(props) {
  return (
    <div>
        <TransactionForm updateBalance={props.updateBalance} balance={props.balance} />
    </div>
  )
}