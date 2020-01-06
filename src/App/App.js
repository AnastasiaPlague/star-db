import React, { Component } from "react";
import Header from "../Header/Header";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import ItemList from "../ItemList/ItemList";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import SwapiService from "../services/SwapiService.js";
import { Row } from "../ContainerRow/Row";
import PeoplePage from "../PeoplePage/PeoplePage";
import "./App.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { PersonList, PlanetList, StarshipList } from "../SwComponents/ItemLists";
import { PersonDetails, PlanetDetails, StarshipDetails } from "../SwComponents/Details";

class App extends Component {
	swapiService = new SwapiService();

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
			<ErrorBoundary>
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

					<PlanetDetails itemId={5} />
					
					<PersonList />
					<StarshipList />
					<PlanetList />
					<Row left={<PersonDetails itemId={11}/>}  right={<StarshipDetails itemId={9} />} />
				</div>
			</ErrorBoundary>
		);
	}
}

export default App;
