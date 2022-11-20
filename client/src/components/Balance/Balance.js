import React from 'react';
import "./Balance.css"

export default function Balance(props) {
  return (
    <div className='balance'>
        <h2>Balance:</h2>
        <h2>Balance:</h2>
        <span className='balance-number'>{props.balance}</span>
     </div>
  )
}