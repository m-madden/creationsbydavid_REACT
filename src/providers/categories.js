import React, { Component } from 'react';
import { CategoriesContext } from '../Context';

export class Categories extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active_category: null,
			categories: [],
			api_endpoint: `${process.env.REACT_APP_WP_API_ROOT}categories/?hide_empty=true&orderby=name`
		}
	}

	componentDidMount = () => {
		fetch(this.state.api_endpoint)
		.then(res => res.json())
		.then(response => {
			this.setState({
				categories: response,
				active_category: response[0]
			})
		})
	}

	switchCategory = (newCat) => {
		this.setState({active_category: newCat})
	}

	render() {
		let { active_category, categories } = this.state
		return(
			<CategoriesContext.Provider
				value={{
					active_category,
					categories,
					switch_category: this.switchCategory.bind(this)
				}}
			>
			{this.props.children}
			</CategoriesContext.Provider>
		)
	}
}