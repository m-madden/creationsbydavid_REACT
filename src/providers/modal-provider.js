import React, { Component } from 'react';
import { ModalContext } from '../Context';

export class ModalProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			detail: null,
			gallery: null,
			isFetching: false,
			post_endpoint: `${process.env.REACT_APP_WP_API_ENDPOINT}posts/`,
			gallery_endpoint: `${process.env.REACT_APP_WP_POST_GALLERY_ENDPOINT}`
		}
	}

	openDetail = (id) => {
		this.setState({
			isFetching: true,
			isOpen: true
		})

		const getPost = fetch(this.state.post_endpoint + id + "/?_embed")
		.then(res => res.json())
		.then(detail => {
			return detail;
		})

		let getGallery = fetch(this.state.gallery_endpoint + id)
		.then(res => res.json())
		.then(response => {
			return response;
		})

		Promise.all([getPost, getGallery])
		.then((response) => {
			this.setState({
				detail: response[0],
				gallery: response[1],
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
		let { isOpen, isFetching, detail, gallery } = this.state;
		return(
			<ModalContext.Provider
				value={{
					isOpen,
					detail,
					gallery,
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