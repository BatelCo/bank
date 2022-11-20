import React from 'react';
import { useState, useEffect } from 'react'
import Transaction from '../Transaction/Transaction';
import { BankApi } from '../../data/BankApi';

export default function Transactions() {
	const [transactions, setTransactions] = useState([])

	useEffect(() => {
		loadTransactions() 
	},[])

	async function deleteTransaction(id){
		await BankApi().deleteTransaction(id)
		loadTransactions() 
	}

	async function loadTransactions(){
		let newTransactions = await BankApi().getTransactions()
		setTransactions(newTransactions.data.transactions)
	}
	
	return (
		<div className='transactions-board'>{transactions.map(transaction =>
			<Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>)}
		</div>
	)
}