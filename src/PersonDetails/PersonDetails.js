import React from "react";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";

const PersonDetails = props => {
	return (
		<ItemDetails {...props}>
			<Record field="gender" label="Gender" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>
	);
};

export default PersonDetails;
