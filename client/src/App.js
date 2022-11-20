import "./App.css"
import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Transactions from "./components/Transactions/Transactions"
import Breakdown from "./components/Breakdown/Breakdown"
import Header from "./components/Header/Header"
import Balance from "./components/Balance/Balance"
import NavBar from "./components/NavBar/NavBar"

import axios from 'axios';
import Operations from "./components/Operations/Operations"

function App() {
	const [balance, setBalance] = useState(0)


	const updateBalance = (delta, operation)=>{
		let newBalance;
		if(operation == "+"){
		    newBalance = balance + parseFloat(delta)
		}
		else{
		    newBalance = balance - parseFloat(delta)
		}
		setBalance(newBalance)
	}

	const getHeaderLinks = () => {
		return (
			<div id="main-links">
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
					render={() => <Transactions/>}
				/>
				<Route
					exact path="/operations"
					render={() => <Operations/>}
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
			<div className="App">
				{/* <div className="header"> */}
					{getHeaderLinks()}
					{/* <NavBar/> */}
					<Balance balance={balance}/>
				{/* </div> */}
				
				<div id="bank-interface">{getAppRoutes()}</div>
			</div>
		</Router>
	)
	
}
export default App;