import React, {useState} from 'react';
import "./TransactionForm.css"
import constants from '../../constants';
import { BankApi } from '../../data/BankApi';

export default function TransactionForm(props) {
    const [transactionInputs, setTransactionInputs] = useState({amountInput:"", categoryInput:"", vendorInput:""})

    const handleChange = e => {
        let newTransactionInputs={...transactionInputs}
        let inputToHandle = e.target
        newTransactionInputs[inputToHandle.name] = inputToHandle.value
        setTransactionInputs(newTransactionInputs)
    }

    async function insertTransaction(sign){
        let transactionInputData = {amount: (sign === constants.signConstants.MINUS) ? -transactionInputs.amountInput : parseInt(transactionInputs.amountInput),
                                    category: transactionInputs.categoryInput,
                                    vendor: transactionInputs.vendorInput}
        await BankApi().insertTransaction(transactionInputData)
        props.updateBalance(transactionInputData.amount)
    }

    const validInput = ()=>{
        if (transactionInputs.amountInput > 0 && transactionInputs.categoryInput !== "" && transactionInputs.vendorInput != ""){
            return true
        }
        return false
    }

    const addTransaction = (sign) =>{
        if (validInput()){
            insertTransaction(sign)
        }
        else{
            alert("Invalid input")
        }
    }

    return (
    <div>
        <div className="transaction-form">
            <div className="title">Insert Transaction:</div>
            <input className="input-form" min='0' onChange={handleChange} placeholder='amount' name="amountInput" type="number"></input>
            <input className="input-form" onChange={handleChange} placeholder='category' name="categoryInput" type="text"></input>
            <input className="input-form" onChange={handleChange} placeholder='vendor' name="vendorInput" type="text"></input><br/>
            <button className="deposit" name="deposit" onClick={()=> addTransaction(constants.signConstants.PLUS)}>Deposit</button>
      <button className="withdraw" name="withdraw" onClick={()=> addTransaction(constants.signConstants.MINUS)}>Withdraw</button>
        </div>
    </div>
  )
}