import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "../services/SwapiService.js";
import Spinner from "../Spinner/Spinner";
import PlanetDetails from "../PlanetDetails/PlanetDetails";

class RandomPlanet extends Component {
	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true
	};

	constructor() {
		super();
		this.updatePlanet();
	}

	updatePlanet() {
		const id = Math.floor(Math.random() * 25) + 2;
		this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
	}
	onPlanetLoaded = planet => {
		this.setState({
			planet,
			loading: false
		});
	};

	render() {
		const { planet, loading } = this.state;
		const spinner = loading ? <Spinner /> : null;
		const content = !loading ? <PlanetView planet={planet} /> : null;
		return (
			<div className="random-planet jumbotron rounded mb-3 d-flex">
				{spinner}
				{content}
			</div>
		);
	}
}

const PlanetView = ({ planet }) => {
	const { id, name, population, rotationPeriod, diameter } = planet;
	return (
		<React.Fragment>
			<img
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
				alt=""
				className="planet-image mt-2 rounded-sm"
			/>
			<div className="card-body ">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population </span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period </span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter </span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
};

export default RandomPlanet;
