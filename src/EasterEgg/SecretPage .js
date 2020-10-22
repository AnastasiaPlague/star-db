import React from "react";
import { Redirect } from "react-router-dom";

const SecretPage = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return (
			<div className="jumbotron text-centered">
				<h3>A very secret page with very secret content...</h3>
			</div>
		);
	}
	return <Redirect to="/login" />;
};

export default SecretPage;
