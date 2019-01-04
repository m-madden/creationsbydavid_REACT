import React, { Component } from 'react';
import { ContentContext } from '../Context';

export class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active_category: 0,
			categories: null,
			posts: null,
			carousel: null,
			api_endpoint: `${process.env.REACT_APP_WP_API_ROOT}categories/?hide_empty=true&orderby=slug`
		}
	}

	componentDidMount = () => {
		fetch('http://localhost/creationsbydavid/wp-json/content/v1/test',
		{ headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		 } }
		)
		.then(res => res.json())
		.then(content => {
			this.setState({
				categories: content.categories,
				posts: content.posts,
				carousel: content.carousel
			})
		})
	}

	switchCategory = (active_category) => {
		this.setState({active_category})
	}

	render() {
		let { active_category, categories, posts, carousel } = this.state
		return(
			<ContentContext.Provider
				value={{
					active_category,
					categories,
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