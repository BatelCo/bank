import React from 'react';
import { useState, useEffect } from 'react'
import BreakdownItem from '../BreakdownItem/BreakdownItem';
import axios from 'axios';

export default function Breakdown() {
  const [breakdown, setBreakdown] = useState([])

  useEffect(() => {
    loadBreakdown() 
  },[])
  
  async function loadBreakdown(){
    let promise= await axios.get("http://localhost:8000/breakdown")
    let new_braekdown = promise.data.breakdown
    setBreakdown(new_braekdown) 
  }
  
  return (
    <div className='breakdown-board'>{breakdown.map(breakdownItem =>
         <BreakdownItem breakdownItem={breakdownItem}/>)}
    </div>
  )
}