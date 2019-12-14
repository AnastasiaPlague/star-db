import React from "react";

const ErrorIndicator = () => {
	return (
		<div className="error-indicator text-center">
			<h4 className="text-warning">BOOM</h4>
			<p className="text-warning mb-0">something has gone terribly wrong</p>
			<p className="text-warning">but we have already sent droids to fix it</p>
		</div>
	);
};

export default ErrorIndicator;
