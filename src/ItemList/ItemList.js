import React from "react";
import "./ItemList.css";

const ItemList = props => {
	const { data, children: renderLabel } = props;
	const items = data.map(item => {
		const { id } = item;
		const label = renderLabel(item);
		return (
			<li
				className="list-group-item"
				key={id}
				onClick={() => props.onItemSelected(id)}
			>
				{label}
			</li>
		);
	});
	return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
