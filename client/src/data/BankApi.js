import axios from "axios"
import constants from "../constants"

export function BankApi(){
    function getTransactions(){
      return axios.get(constants.routersConstants.TRANSACTIONS_API)
    }
    function deleteTransaction(id){
        axios.delete(`${constants.routersConstants.TRANSACTIONS_API}/${id}`)
    } 
    function getBreakdown(){
        return axios.get(constants.routersConstants.BREAKDOWN_API)
    }

    return {getTransactions, deleteTransaction, getBreakdown}
}