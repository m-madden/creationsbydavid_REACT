import React, { Component } from 'react'
// import TransitionGroup from 'react-transition-group';

export class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hidden: "hidden"
		}
		this.show = this.show.bind(this)
	}

	componentDidMount = () => {
		let that = this;
		window.setTimeout(function() {
			that.show();
		}, that.props.delay)
	}

	show = () => {
		this.setState({hidden: ""})
	}

	render() {
		let { item } = this.props
		return(
			<img className={"section__item " + this.state.hidden} src={item.fimg_url} alt={item.slug}/>
		)
	}
}