import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";

export const withData = (View, getData) => {
	return class extends Component {
		state = {
			data: null
		};

		componentDidMount() {
			getData().then(data => {
				this.setState({
					data
				});
			});
		}

		render() {
			const { data } = this.state;

			if (!data) {
				return <Spinner />;
			}

			return <View {...this.props} data={data} />; //this is an empty wrapper for ItemList, it can access every property passed down to the ItemList component
		}
	};
};
