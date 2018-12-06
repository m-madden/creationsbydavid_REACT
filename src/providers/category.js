import React, { Component } from 'react';
import { CategoryContext } from '../Context';

export class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}

	componentWillReceiveProps = (nextProps) => {
		let { active_category } = nextProps
		if(active_category) {
			fetch(`${process.env.REACT_APP_WP_API_ROOT}posts?categories=${active_category.id}`)
			.then(res => res.json())
			.then(posts => {
				this.setState({
					posts
				})
			})
		}
	}

	render() {
		let { posts } = this.state
		return(
			<CategoryContext.Provider
				value={{
					posts
				}}
			>
				{this.props.children}
			</CategoryContext.Provider>
		)
	}
}