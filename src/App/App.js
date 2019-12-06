import React from "react";
import Header from "../Header/Header";
import PersonDetails from "../PersonDetails/PersonDetails";
import ItemList from "../ItemList/ItemList";
import PlanetDetails from "../PlanetDetails/PlanetDetails";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import StarshipDetails from "../StarshipDetails/StarshipDetails";
import "./App.css";

function App() {
	return (
		<div className="App container">
			<Header />
			<div className="mt-3">
				<RandomPlanet />
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

export default App;
