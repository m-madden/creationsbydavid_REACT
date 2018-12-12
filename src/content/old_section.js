import React, { Component } from 'react';
import { Item } from './';
import { CSSTransition } from 'react-transition-group';

export class Section extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entered: false
		}
		this.makeTrue = this.makeTrue.bind(this)
	}

	componentDidMount = () => {
		this.setState({entered: true})
	}

	makeTrue = () => {
		return true
	}

	render() {
		let items = posts.map((item, i) => {
			return(
				<Item key={i} item={item} delay={i*150}/>
			)
		})
		return(
			<CSSTransition in={!this.state.entered} timeout={1000} classNames="slide" unmountOnExit>
				<div className="section">
					{items}
				</div>
			</CSSTransition>
		)
	}
}