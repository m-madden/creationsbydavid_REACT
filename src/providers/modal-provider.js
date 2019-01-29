import React, { Component } from 'react';
import { ModalContext } from '../Context';

export class ModalProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			detail: null,
			isFetching: false
		}
	}

	openDetail = (id) => {
		this.setState({
			isFetching: true,
			isOpen: true
		})
		fetch(`${process.env.REACT_APP_WP_API_ROOT}posts/${id}`)
		.then(res => res.json())
		.then(detail => {
			this.setState({
				detail,
				isFetching: false
			})
		}) 
	}

	closeDetail = () => {
		this.setState({
			isOpen: false,
			detail: null
		})
	}

	render() {
		let { isOpen, isFetching, detail } = this.state;
		return(
			<ModalContext.Provider
				value={{
					isOpen,
					detail,
					isFetching,
					open_detail: this.openDetail.bind(this),
					close_detail: this.closeDetail.bind(this)
				}}
			>
				{this.props.children}
			</ModalContext.Provider>
		)
	}
}