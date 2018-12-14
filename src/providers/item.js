import React, { Component } from 'react';
import { ItemContext } from '../Context';

export class ItemProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			detail: null,
			isFetching: false
		}
	}

	openItem = (ID) => {
		this.setState({
			isFetching: true,
			isOpen: true
		})
		fetch(`${process.env.REACT_APP_WP_API_ROOT}posts/${ID}`)
		.then(res => res.json())
		.then(detail => {
			this.setState({
				detail,
				isFetching: false
			})
		}) 
	}

	closeItem = () => {
		this.setState({
			isOpen: false,
			detail: null
		})
	}

	render() {
		let { isOpen, isFetching, detail } = this.state;
		return(
			<ItemContext.Provider
				value={{
					isOpen,
					detail,
					isFetching,
					open_item: this.openItem.bind(this),
					close_item: this.closeItem.bind(this)
				}}
			>
				{this.props.children}
			</ItemContext.Provider>
		)
	}
}