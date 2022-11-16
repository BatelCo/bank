import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import Transaction from '../Transaction/Transaction';
import axios from 'axios';

export default function Transactions() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetchTransactions() 
  },[])
  
  async function fetchTransactions(){
    let promise= await axios.get("http://localhost:8000/transactions")
    let new_transactions = promise.data.transactions
    setTransactions(new_transactions) 
  }
  
  return (
    <div className='transactions-board'>{transactions.map(transaction =>
         <Transaction key={transaction.id} transaction={transaction}/>)}
    </div>
  )
}