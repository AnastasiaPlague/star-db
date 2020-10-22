import React from "react";

export const Row = ({ left, right }) => {
	return (
		<div className="row second">
			<div className="col-md-6">{left}</div>
			<div className="col-md-6">{right}</div>
		</div>
	);
};
