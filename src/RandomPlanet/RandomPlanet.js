import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "../services/SwapiService.js";

class RandomPlanet extends Component {
	swapiService = new SwapiService();

	state = {
		planet: {}
	};
	constructor() {
		super();
		this.updatePlanet();
	}
	onPlanetLoaded = planet => {
		this.setState({
			planet
		});
	};
	updatePlanet() {
		const id = Math.floor(Math.random() * 25) + 2;
		this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
	}

	render() {
		const { planet: { id, name, population, rotationPeriod, diameter} } = this.state;
		return (
			<div className="random-planet jumbotron rounded mb-3 d-flex">
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
			</div>
		);
	}
}

export default RandomPlanet;
