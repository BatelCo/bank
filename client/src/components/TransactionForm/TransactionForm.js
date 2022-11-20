import React, {useState, useEffect} from 'react';
import "./TransactionForm.css"
import axios from 'axios';
import constants from '../../constants';
import { BankApi } from '../../data/BankApi';

export default function TransactionForm(props) {
    const [transactionInputs, setTransactionInputs] = useState({amountInput:"", categoryInput:"", vendorInput:""})

    const handleChange = e => {
        let newTransactionInputs={...transactionInputs}
        newTransactionInputs[e.target.name] = e.target.value
        console.log(newTransactionInputs)
        setTransactionInputs(newTransactionInputs)
    }

    async function insertTransaction(sign){
        let transactionInputData = {amount: (sign == "-") ? -transactionInputs.amountInput : transactionInputs.amountInput,
        category: transactionInputs.categoryInput,
        vendor: transactionInputs.vendorInput}
        await BankApi().insertTransaction(transactionInputData)
    }

    const updateBalance=()=>{
        console.log(updateBalance)        
    }

    const validInput=()=>{
        if (transactionInputs.amountInput > 0 && transactionInputs.categoryInput != "" && transactionInputs.vendorInput != ""){
            return true
        }
        return false
    }

    const addTransaction= (sign) =>{
        if (validInput()){
            console.log("addTransaction")
            insertTransaction(sign)
            updateBalance()
        }
        else{
            alert("Invalid input")
        }
    }

    return (
    <div>
        <div className="title">Insert Transaction:</div>
        <div className="transaction-form">
            <input className="inputform" min='0' onChange={handleChange} placeholder='amount' name="amountInput" type="number"></input>
            <input className="inputform" onChange={handleChange} placeholder='category' name="categoryInput" type="text"></input>
            <input className="inputform" onChange={handleChange} placeholder='vendor' name="vendorInput" type="text"></input><br/>
            <button className="deposit" name="deposit" onClick={()=>addTransaction(constants.signConstants.PLUS)}>Deposit</button>
      <button className="withdraw" name="withdraw" onClick={()=>addTransaction(constants.signConstants.MINUS)}>Withdraw</button>
        </div>
    </div>
  )
}