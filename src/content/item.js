import React, { Component } from 'react'

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
		}, that.props.delay * 300)
	}

	show = () => {
		this.setState({hidden: ""})
	}

	render() {
		let { item, open_post } = this.props
		console.log(item)
		return(
			<div onClick={() => open_post(item.ID)} className={"item " + this.state.hidden}>
				<img src={item.fimg} alt={item.title}/>
				<p>{item.title}</p>
			</div>
		)
	}
}