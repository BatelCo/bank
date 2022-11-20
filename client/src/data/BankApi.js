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
        axios.delete(`${constants.routersConstants.TRANSACTIONS_API}/${id}`)
    } 
    function insertTransaction(transactionInputData){
        axios.post(constants.routersConstants.TRANSACTIONS_API, transactionInputData);
    }
    return {getBreakdown, getTransactions, deleteTransaction, insertTransaction}
}