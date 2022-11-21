import "./App.css"
import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Transactions from "./components/Transactions/Transactions"
import Operations from "./components/Operations/Operations"
import Breakdown from "./components/Breakdown/Breakdown"
import Balance from "./components/Balance/Balance"
import { BankApi } from "./api/BankApi"

function App() {
	const [balance, setBalance] = useState(0)

	useEffect(() => {
		getBalance() 
	},[])

	const getBalance = async ()=>{
		const balanceRes = await BankApi().getBalance()
		const newBalance = balanceRes.data.balance[0].amount
		setBalance(newBalance)
	}

	const updateBalance = async (valueToUpdate)=>{
		await BankApi().updateBalance(valueToUpdate)
		const balanceRes = await BankApi().getBalance()
		const newBalance = balanceRes.data.balance[0].amount
		setBalance(newBalance)
	}

	const getHeaderLinks = () => {
		return (
			<div className="main-links">
				<Link to="/">Transactions</Link>
				<Link to="/operations">Operations</Link>
				<Link to="/breakdown">Breakdown</Link>
			</div>
		)
	}

	const getAppRoutes = () => {
		return (
			<div className="routs-container">
				<Route
					exact path="/"
					render={() => <Transactions updateBalance={updateBalance} />}
				/>
				<Route
					exact path="/operations"
					render={() => <Operations updateBalance={updateBalance}/>}
				/>
				<Route
					exact path="/breakdown"
					render={() => <Breakdown/>}
				/>
			</div>
		)
	}

	return (
		<Router>
			<div className="app">
					{getHeaderLinks()}
					<Balance balance={balance} />				
				<div>{getAppRoutes()}</div>
			</div>
		</Router>
	)
	
}
export default App;