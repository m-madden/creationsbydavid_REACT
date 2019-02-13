import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer } from './';

const modalRoot = document.getElementById('modal-root');
const body = document.getElementById('body');

export class Portal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount = () => {
		if(this.props.modal.isOpen) {
			modalRoot.appendChild(this.el);
			body.className = "no-scroll";
		}
	}

	componentWillUnmount = () => {
		modalRoot.removeChild(this.el);
		body.className = "";
	}

	render() {
		let { isOpen } = this.props.modal;
		return (
			isOpen ?
			ReactDOM.createPortal(<ModalContainer modal={this.props.modal}/>, this.el)
			: null
		)
	}
}