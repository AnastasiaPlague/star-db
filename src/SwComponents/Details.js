import React from "react";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import SwapiService from "../services/SwapiService";

const swapiService = new SwapiService();

const {
	getPerson,
	getPlanet,
	getStarship,
	getPersonImg,
	getPlanetImg,
	getStarshipImg
} = swapiService;

const PersonDetails = ({ itemId }) => {
	return (
		<ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImg}>
			<Record field="gender" label="Gender" />
			<Record field="birthYear" label="Birth Year" />
			<Record field="eyeColor" label="Eye Color" />
			<Record field="skinColor" label="Skin Color" />
		</ItemDetails>
	);
};

const PlanetDetails = ({ itemId }) => {
	return (
		<ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImg}>
			<Record field="diameter" label="Diameter" />
			<Record field="rotationPeriod" label="Rotation Period" />
		</ItemDetails>
	);
};

const StarshipDetails = ({ itemId }) => {
	return (
		<ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImg}>
			<Record field="model" label="Model" />
			<Record field="starshipClass" label="Starship Class" />
			<Record field="starshipLength" label="Starship Length" />
		</ItemDetails>
	);
};

export { PersonDetails, PlanetDetails, StarshipDetails };
