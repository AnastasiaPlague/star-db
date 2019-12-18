import React, { Component } from "react";
import PersonDetails from "../PersonDetails/PersonDetails";
import ItemList from "../ItemList/ItemList";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SwapiService from "../services/SwapiService";
import { Row } from "../ContainerRow/Row";

class PeoplePage extends Component {
	swapiService = new SwapiService();

	state = {
		selectedPerson: null
	};

	onPersonSelected = id => {
		this.setState({
			selectedPerson: id
		});
	};
	render() {
		const itemList = (
			<ItemList getData={this.swapiService.getAllPeople} onItemSelected={this.onPersonSelected}>
				{i => `${i.name} (${i.birthYear})`}
			</ItemList>
		);

		const personDetails = (
			<ErrorBoundary>
				<PersonDetails personId={this.state.selectedPerson} />
			</ErrorBoundary>
		);
		return <Row left={itemList} right={personDetails} />;
	}
}

export default PeoplePage;
