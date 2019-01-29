import React, { Component } from 'react';

export class Modal extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		let { detail, close_detail } = this.props.modal;
		return(
			<div className="modal">
				<section>
					<img />
					<div>
						
					</div>
				</section>
			</div>
		)
	}
}