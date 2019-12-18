import React, { Component } from "react";
import "./PersonDetails.css";
import SwapiService from "../services/SwapiService";
import Spinner from "../Spinner/Spinner";
class PersonDetails extends Component {
	swapiService = new SwapiService();
	state = {
		person: null,
		loading: false
	};
	componentDidMount() {
		this.updatePerson();
	}
	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.setState({
				loading: true
			});
			this.updatePerson();
		} //use if() {} to actually check if the component did update, because if we don't check it, after any update to the component this func will fire and lead to a cycle
	}

	updatePerson() {
		const { personId } = this.props;
		if (!personId) {
			return;
		}
		this.swapiService.getPerson(personId).then(person => {
			this.setState({
				person,
				loading: false
			});
		});
	}

	render() {
		if (!this.state.person) {
			return <h4 className='text-center'>Select a person from a list</h4>;
		}

		const visiblePerson = this.state.loading ? (
			<Spinner />
		) : (
			<PersonToShow person={this.state.person} />
		);

		return <div className="person-details card flex-row">{visiblePerson}</div>;
	}
}

export default PersonDetails;

const PersonToShow = ({ person }) => {
	const { id, name, gender, birthYear, eyeColor, skinColor } = person;
	return (
		<React.Fragment>
			<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Gender </span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Birth Year </span>
						<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Skin color </span>
						<span>{skinColor}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Eye color </span>
						<span>{eyeColor}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
};
