import React, { Component } from 'react';

export class SubCategories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSubCategory: null,
			subcategories: null
		}
	}

	componentDidMount = () => {
		let { categories, parent } = this.props;
		let childCats = Object.keys(categories).map((cat, i) => {
			let category = categories[cat];
			if(category.parent === parent) {
				return cat
			}
		})
		let subcategories = childCats.filter(child => child !== undefined)
		this.setState({
			subcategories,
			activeSubCategory: subcategories[0]
		})
	}

	render() {
		let { categories } = this.props;
		return(
			this.state.subcategories ?
			this.state.subcategories.map((id, i) => {
				return(
					<div key={i}>{categories[id].name}</div>
				)
			})
			: null
		)
	}
}