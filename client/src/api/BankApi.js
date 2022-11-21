import axios from "axios"
import constants from "../constants"

export function BankApi(){
    function getBreakdown(){
        return axios.get(constants.routersConstants.BREAKDOWN_API)
    }
    function getTransactions(){
        return axios.get(constants.routersConstants.TRANSACTIONS_API)
    }
    function deleteTransaction(id){
        return axios.delete(`${constants.routersConstants.TRANSACTIONS_API}/${id}`)
    } 
    function insertTransaction(transactionInputData){
        return axios.post(constants.routersConstants.TRANSACTIONS_API, transactionInputData);
    }
    function updateBalance(valueToUpdate){
        return axios.post(constants.routersConstants.BALANCE_API, valueToUpdate);
    }
    function getBalance(){
        return axios.get(constants.routersConstants.BALANCE_API);
    }

    return {getBreakdown,
            getTransactions,
            deleteTransaction,
            insertTransaction,
            updateBalance,
            getBalance}
}