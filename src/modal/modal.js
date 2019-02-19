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
					<h3 className="modalText__title">{detail.title.rendered}</h3>
					<p className="modalText__text">{text}</p>
					{detail.meta.materials[0] !== "" || detail.meta.dimensions[0] !== "" &&
						<div className="modalText__indicia">
							{detail.meta.materials[0] !== "" &&
								<p className="modalText__materials">{detail.meta.materials[0]}</p>
							}
							{detail.meta.dimensions[0] !== "" &&
								<p className="modalText__dimensions">{detail.meta.dimensions[0]}</p>
							}
						</div>
					}
				</section>
			</div>
		)
	}
}