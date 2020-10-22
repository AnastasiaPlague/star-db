import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import SwapiService from "../services/SwapiService.js";
import StarshipsPage from "../StarshipsPage/StarshipsPage";
import PeoplePage from "../PeoplePage/PeoplePage";
import PlanetsPage from "../PlanetsPage/PlanetsPage";
import "./App.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { PlanetDetails, StarshipDetails } from "../SwComponents/Details";
import LoginPage from "../EasterEgg/LoginPage";
import SecretPage from "../EasterEgg/SecretPage ";

class App extends Component {
	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true,
		isLoggedIn: false,
	};

	toggleRandomPlanet = () => {
		this.setState(state => {
			return {
				showRandomPlanet: !state.showRandomPlanet,
			};
		});
	};

	onLogin = () => {
		this.setState({
			isLoggedIn: true,
		});
	};

	render() {
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		return (
			<ErrorBoundary>
				<Router>
					<div className="App container">
						<Header />
						<div className="container">
							{planet}
							<button
								className="toggle-planet btn btn-warning btn-lg mb-3"
								onClick={this.toggleRandomPlanet}
							>
								Toggle Random Planet
							</button>
						</div>
						<Switch>
							<Route
								exact
								path="/"
								render={() => <h1>Welcome to StarDB!</h1>}
							/>
							<Route exact path="/people/:id?" component={PeoplePage} />
							<Route exact path="/planets/" component={PlanetsPage} />
							<Route exact path="/starships/" component={StarshipsPage} />
							<Route
								path="/starships/:id"
								render={({ match }) => {
									const { id } = match.params;
									return <StarshipDetails itemId={id} />;
								}}
							/>
							<Route
								path="/planets/:id"
								render={({ match }) => {
									const { id } = match.params;
									return <PlanetDetails itemId={id} />;
								}}
							/>
							<Route
								path="/login"
								render={() => (
									<LoginPage
										isLoggedIn={this.state.isLoggedIn}
										onLogin={this.onLogin}
									/>
								)}
							/>
							<Route
								path="/secret"
								render={() => <SecretPage isLoggedIn={this.state.isLoggedIn} />}
							/>
							<Route render={() => <h1>Page not found</h1>} />
						</Switch>
					</div>
				</Router>
			</ErrorBoundary>
		);
	}
}

export default App;
