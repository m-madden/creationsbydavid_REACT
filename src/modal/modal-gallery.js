import React, { Component } from 'react';

export class ModalGallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeImage: this.props.gallery[0]
		}
	}

	switchFullImage = (id) => {
		this.setState({activeImage: this.props.gallery[id]})
	}

	render() {
		const thumbs = this.props.gallery.map((thumb, i) => {
			return(
				<div onClick={ () => { this.switchFullImage(i) }} className="thumbnailContainer" key={i}>
					<img className="thumbnail" src={thumb}/>
				</div>
			)
		})
		return(
			<div className="modal__gallery">
				<img className="modal__gallery__full" src={this.state.activeImage}/>
				<div className="modal__gallery__thumbs">
					{thumbs}
				</div>
			</div>
		)
	}
}