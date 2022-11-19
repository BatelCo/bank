import React from 'react';
import { useState, useEffect } from 'react'
import Transaction from '../Transaction/Transaction';
import axios from 'axios';

export default function Transactions() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    loadTransactions() 
  },[])
  
async function deleteTransaction(id){
    await axios.delete(`http://localhost:8000/transactions/${id}`)
    loadTransactions() 
  }

  async function loadTransactions(){
    let promise= await axios.get("http://localhost:8000/transactions")
    let newTransactions = promise.data.transactions
    setTransactions(newTransactions) 
    console.log(transactions)
  }
  
  return (
    <div className='transactions-board'>{transactions.map(transaction =>
         <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>)}
    </div>
  )
}