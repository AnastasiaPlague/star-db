import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "../services/SwapiService.js";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class RandomPlanet extends Component {
	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false,
	};

	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 10000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onError = err => {
		this.setState({
			error: true,
			loading: false,
		});
	};

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 17) + 2;
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	};

	updateImage = img => {
		this.setState(prevState => ({
			planet: {
				...prevState.planet,
				img: img,
			},
		}));
	};

	onPlanetLoaded = planet => {
		this.setState({
			planet,
			loading: false,
		});
		this.swapiService.getRandomPlanetImg(planet.id).then(this.updateImage);
	};

	render() {
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);
		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <PlanetView planet={planet} /> : null;
		return (
			<div className="random-planet container jumbotron rounded mb-3 d-flex">
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	}
}

const PlanetView = ({ planet }) => {
	const { name, population, rotationPeriod, diameter, img } = planet;
	return (
		<React.Fragment>
			<img src={img} alt="" className="planet-image mt-2 rounded-sm" />
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
