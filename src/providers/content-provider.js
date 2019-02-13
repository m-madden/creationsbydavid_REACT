import React, { Component } from 'react';
import { ContentContext } from '../Context';

export class ContentProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFetching: true,
			active_category: null,
			categories: null,
			subcategories: null,
			posts: null,
			carousel: null,
			cat_endpoint: `${process.env.REACT_APP_WP_API_ROOT}categories/?hide_empty=true&orderby=slug`,
			post_endpoint: `${process.env.REACT_APP_WP_API_ROOT}posts/?_embed`
		}
	}

	componentDidMount = () => {
		const getCats = fetch(this.state.cat_endpoint)
		.then(res => res.json())
		.then(content => {
			let categories = [];
			let subcategories = [];
			content.map((category) => {
				if (category.parent === 0) {
					return categories.push(category)
				} else {
					return subcategories.push(category)
				}
			})
			return {
				categories,
				subcategories
			}
		})

		const getPosts = fetch(this.state.post_endpoint)
		.then(res => res.json())
		.then(posts => {
			return posts
		})

		Promise.all([getCats, getPosts])
		.then((response) => {
			this.setState({
				isFetching: false,
				categories: response[0].categories,
				subcategories: response[0].subcategories,
				posts: response[1]
			})
		})
	}

	switchCategory = (active_category) => {
		this.setState({active_category})
	}

	render() {
		let { isFetching, active_category, categories, subcategories, posts, carousel } = this.state
		return(
			<ContentContext.Provider
				value={{
					isFetching,
					active_category,
					categories,
					subcategories,
					posts,
					carousel,
					switch_category: this.switchCategory.bind(this)
				}}
			>
			{this.props.children}
			</ContentContext.Provider>
		)
	}
}