import React, { Component } from 'react';
import { ModalGallery } from './';

export class Modal extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
		this.strip = this.strip.bind(this);
	}

	strip(html) {
		var doc = new DOMParser().parseFromString(html, 'text/html');
		return doc.body.textContent || "";
	}

	

	render() {

		let { detail, close_detail, ...rest } = this.props;
		let text = this.strip(detail.excerpt.rendered);

		return (
			<div onClick={(e) => { e.stopPropagation() }} className="modal">
				<ModalGallery detail={detail} {...rest} />
				<section className="modalText">
					<div className="modalText__title">{detail.title.rendered}</div>
					<div className="modalText__text">{text}</div>
					{(detail.meta.materials[0] !== "" || detail.meta.dimensions[0] !== "") &&
					
							detail.meta.materials[0] !== "" &&
								<div className="modalText__materials">{detail.meta.materials[0]}</div>
							}
							{detail.meta.dimensions[0] !== "" &&
								<div className="modalText__dimensions">{detail.meta.dimensions[0]}</div>
							}
					
				</section>
			</div>
		)
	}
}