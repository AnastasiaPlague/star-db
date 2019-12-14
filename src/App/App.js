import React, { Component } from "react";
import Header from "../Header/Header";
import PersonDetails from "../PersonDetails/PersonDetails";
import ItemList from "../ItemList/ItemList";
import PlanetDetails from "../PlanetDetails/PlanetDetails";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import StarshipDetails from "../StarshipDetails/StarshipDetails";
import "./App.css";

class App extends Component {
	state = {
		showRandomPlanet: true
	};

	toggleRandomPlanet = () => {
		this.setState(state => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			};
		});
	};

	render() {
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
				<div className="row second">
					<div className="col-md-6 mb-3 pr-3">
						<ItemList />
					</div>
					<div className="col-md-6">
						<PersonDetails />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
