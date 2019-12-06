import React, { Component } from "react";

class ItemList extends Component {
	state = {};
	render() {
		return (
			<ul className="item-list list-group">
				<li className="list-group-item">Luke</li>
				<li className="list-group-item">Darth</li>
				<li className="list-group-item">R2D2</li>
			</ul>
		);
	}
}

export default ItemList;
