import React, { Component } from "react";
import "./ItemDetails.css";
import Spinner from "../Spinner/Spinner";

export const Record = ({item, field, label}) => {
return (
	<li className="list-group-item">
		<span className="term font-weight-bold"> {label}: </span>
		<span>{item[field]} </span>
	</li>
);
}


class ItemDetails extends Component {
	state = {
		item: null,
		img: null,
		loading: false
	};
	componentDidMount() {
		this.updateItem();
	}
	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.setState({
				loading: true
			});
			this.updateItem();
		} //use if() {} to actually check if the component did update, because if we don't check it, after any update to the component this func will fire and lead to a cycle
	}

	updateItem() {
		const { itemId, getData, getImageUrl } = this.props;
		if (!itemId) {
			return;
		}
		getData(itemId).then(item => {
			this.setState({
				item,
				img: getImageUrl(itemId),
				loading: false
			});
		});
	}

	render() {
		const { item, img } = this.state;
		if (!item) {
			return <h4 className="text-center">Select an item from a list</h4>;
		}

		const visibleItem = this.state.loading ? <Spinner /> : <ItemToShow item={item} img={img} children={this.props.children}/>;

		return <div className="item-details card flex-row">{visibleItem}</div>;
	}
}

export default ItemDetails;


const ItemToShow = ({item, img, children}) => {
	const { name } = item;
	return (
		<React.Fragment>
			<img className="item-details"src={img} alt="" />
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{React.Children.map(children, (child) => {
						return React.cloneElement(child, {item})
					})}
				</ul>
			</div>
		</React.Fragment>
	);
};
