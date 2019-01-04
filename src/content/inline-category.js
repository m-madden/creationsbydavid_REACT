import React, { Component } from 'react';
import { Item } from './';

export class InlineCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: "hidden"
		}
	}

	componentDidMount = () => {
		this.setState({hidden: ""})
	}

	render() {
		let { posts, parent, open_post } = this.props
		let items = posts.map((item, i) => {
			// console.log(item)
			return(
				<Item key={i} item={item} delay={i} open_post={open_post}/>
			)
		})
		return(
			<div className={"inlineCategory " + this.state.hidden}>
				{/* if item.category array has id === to parent category */}
				{/* {item.category.includes(parent) ? 
				<div>I have a parent</div>
					: null} */}
				{items}
			</div>
		)
	}
}