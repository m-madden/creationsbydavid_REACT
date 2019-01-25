import React, { Component } from 'react';
import { ContentContext } from '../Context';
import data from './static-data';
import posts from './static-posts';

export class ContentProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active_category: null,
			categories: null,
			subcategories: null,
			posts: null,
			carousel: null,
			api_endpoint: `${process.env.REACT_APP_WP_API_ROOT}categories/?hide_empty=true&orderby=slug`
		}
	}

	componentDidMount = () => {
		let categories = [];
		let subcategories = [];
		data.map((category) => {
			if (category.parent === 0) {
				return categories.push(category)
			} else {
				return subcategories.push(category)
			}
		})
		this.setState({
			categories,
			subcategories,
			posts
		})
		// fetch('http://localhost/creationsbydavid/wp-json/content/v1/test',
		// { headers : { 
		// 	'Content-Type': 'application/json',
		// 	'Accept': 'application/json'
		//  } }
		// )
		// .then(res => res.json())
		// .then(content => {
		// 	console.log(content)
		// 	let childCats = []
		// 	const catsArray = Object.keys(content.categories).map(cat => {
		// 		let category = content.categories[cat]
		// 		if (content.categories[cat].parent === 0) {
		// 			return({
		// 				[category.id]: category,
		// 				subcategories: null					
		// 			})
		// 		} else {
		// 			childCats.push({[category.id]: category,})
		// 		}
		// 	});
		// 	childCats.filter(child => child !== undefined);
		// 	let parentCats = catsArray.filter(child => child !== undefined);

		// 	this.setState({
		// 		categories: content.categories,
		// 		posts: content.posts,
		// 		carousel: content.carousel,
		// 		active_category: parentCats[0]
		// 	})
		// })
	}

	switchCategory = (active_category) => {
		this.setState({active_category})
	}

	render() {
		let { active_category, categories, subcategories, posts, carousel } = this.state
		return(
			<ContentContext.Provider
				value={{
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