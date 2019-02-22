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
		let { detail, gallery } = this.props;
		const thumbs = gallery.map((thumb, i) => {
			return gallery.length > 1 ?
				<div onClick={ () => { this.switchFullImage(i) }} className="thumbnailContainer" key={i}>
					<img className="thumbnail" src={thumb} alt={detail.title.rendered}/>
				</div>
			: null
		})
		return(
			<div className="modal__gallery">
				<img className="modal__gallery__full" src={this.state.activeImage} alt=""/>
				{thumbs.length > 1 &&
					<div className="modal__gallery__thumbs">
						{thumbs}
					</div>
				}
			</div>
		)
	}
}