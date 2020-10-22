import React, { Component } from "react";
import PersonDetails from "../PersonDetails/PersonDetails";
import SwapiService from "../services/SwapiService";
import { Row } from "../ContainerRow/Row";
import { PersonList } from "../SwComponents/ItemLists";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ history, match }) => {
	const swapiService = new SwapiService();

	const { id } = match.params;
	return (
		<Row
			left={
				<PersonList
					onItemSelected={id => {
						history.push(id);
					}}
				/>
			}
			right={
				<PersonDetails
					getData={swapiService.getPerson}
					getImageUrl={swapiService.getPersonImg}
					itemId={id}
				/>
			}
		/>
	);
};

export default withRouter(PeoplePage);
