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
		let { posts } = this.props
		let items = posts.map((item, i) => {
			return(
				<Item key={i} item={item} delay={i}/>
			)
		})
		return(
			<div className={"inlineCategory " + this.state.hidden}>
				{items}
			</div>
		)
	}
}