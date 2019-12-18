import React, { Component } from "react";
import Header from "../Header/Header";
import PersonDetails from "../PersonDetails/PersonDetails";
import ItemList from "../ItemList/ItemList";
import PlanetDetails from "../PlanetDetails/PlanetDetails";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import SwapiService from "../services/SwapiService.js";
import StarshipDetails from "../StarshipDetails/StarshipDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PeoplePage from "../PeoplePage/PeoplePage";
import "./App.css";

class App extends Component {
	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true,
		hasError: false
	};

	toggleRandomPlanet = () => {
		this.setState(state => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			};
		});
	};

	componentDidCatch() {
		this.setState({
			hasError: true
		});
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<div className="App container">
				<Header />
				<div className="mt-3">
					{planet}
					<button
						className="toggle-planet btn btn-warning btn-lg mb-3"
						onClick={this.toggleRandomPlanet}>
						Toggle Random Planet
					</button>
				</div>
				<PeoplePage />
				<div className="row second">
					<div className="col-md-6 mb-3 pr-3">
						<ItemList
							onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllPlanets}>
							{item => item.list}
						</ItemList>
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson} />
					</div>
				</div>
				<div className="row second">
					<div className="col-md-6 mb-3 pr-3">
						<ItemList
							onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllStarships}>
							{item => item.list}
						</ItemList>
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
