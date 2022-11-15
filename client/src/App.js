import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { Component } from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {}
	}

	getBalanceElement = () => <div id="balance">balance:10</div>
	getTransactionsPage = () => <div>Transactions</div>
	getOperationsPage = () => <div>Operations</div>
	getBreakdownPage = () => <div>breakdown</div>

	getFooterLinks = () => {
		return (
			<div id="main-links">
				<Link to="/">Transactions</Link>
				<Link to="/operations">Operations</Link>
				<Link to="/breakdown">Breakdown</Link>
			</div>
		)
	}

	getAppRoutes = () => {
		return (
			<div className="routs-container">
				<Route
					exact
					path="/"
					render={() => this.getTransactionsPage()}
				/>
				<Route
					exact
					path="/operations"
					render={() => this.getOperationsPage()}
				/>
				<Route
					exact
					path="/breakdown"
					render={() => this.getBreakdownPage()}
				/>
			</div>
		)
	}

	render() {
		return (
			<Router>
				<div className="App">
					<div className="footer">
						{this.getFooterLinks()}
						{this.getBalanceElement()}
					</div>
					<div id="bank-interface">{this.getAppRoutes()}</div>
				</div>
			</Router>
		)
	}
}

export default App
