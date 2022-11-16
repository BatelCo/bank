import React from 'react';
import "./BreakdownItem.css"

export default function Transaction(props) {
    return (
        <div className="breakdown-item" >
            <span>{props.breakdownItem.category} </span>
            <span>{props.breakdownItem.total_amount} </span>
        </div>
  )
}