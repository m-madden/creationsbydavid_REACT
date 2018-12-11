import React, { Component } from 'react';
import { ContentContext } from '../Context';

export class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active_category: 0,
			content: [],
			api_endpoint: `${process.env.REACT_APP_WP_API_ROOT}categories/?hide_empty=true&orderby=slug`
		}
	}

	componentDidMount = () => {
		fetch(this.state.api_endpoint)
		.then(res => res.json())
		.then((content) => {
			// let content = pre_content.map((cat, i) => {
			// 	return {[cat.id]: cat}
			// })
			this.setState({
				content,
				active_category: content[0].id
			})
		})
		
	}

	switchCategory = (active_category) => {
		this.setState({active_category})
	}

	render() {
		let { active_category, content } = this.state
		return(
			<ContentContext.Provider
				value={{
					active_category,
					content,
					switch_category: this.switchCategory.bind(this)
				}}
			>
			{this.props.children}
			</ContentContext.Provider>
		)
	}
}