import React from "react";
import ItemList from "../ItemList/ItemList";
import { withData } from "../HocHelper/WithData";
import SwapiService from "../services/SwapiService";

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
	return props => {
		return <Wrapped {...props}>{fn}</Wrapped>;
	};
};
const renderName = ({ name }) => (
	<span>{name}</span>
);
const renderModelAndName = ({ model, name }) => {
 return <span>{name} ({model})</span>
};

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarships);

export { PersonList, PlanetList, StarshipList };
