import React, { Component } from 'react';
import { ModalGallery } from './';

export class Modal extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
		this.strip = this.strip.bind(this);
	}

	strip(html){
		var doc = new DOMParser().parseFromString(html, 'text/html');
		return doc.body.textContent || "";
 }

	render() {
		let { detail, close_detail, ...rest } = this.props;
		let text = this.strip(detail.excerpt.rendered);
		return(
			<div onClick={(e) => {e.stopPropagation()}} className="modal">
				<ModalGallery {...rest}/>
				<section className="modalText">
					<h3 className="modalText__title">{detail.title.rendered}</h3>
					<p className="modalText__text">{text}</p>
				</section>
			</div>
		)
	}
}