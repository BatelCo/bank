import React from 'react';
import { useState, useEffect } from 'react'
import BreakdownItem from '../BreakdownItem/BreakdownItem';
import { BankApi } from '../../data/BankApi';


export default function Breakdown() {
  const [breakdown, setBreakdown] = useState([])

  useEffect(() => {
    loadBreakdown() 
  },[])
  
  async function loadBreakdown(){
      let newBraekdown = await BankApi().getBreakdown()
      setBreakdown(newBraekdown.data.breakdown) 
  }

  return (
      <div className='breakdown-board'>{breakdown.map((breakdownItem, index) =>
          <BreakdownItem key={index} breakdownItem={breakdownItem}/>)}
      </div>
  )
}