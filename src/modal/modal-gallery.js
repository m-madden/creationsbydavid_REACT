import React, { Component } from 'react';

export class ModalGallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeImage: null
		}
	}

	componentDidMount = () => {
		let { detail, gallery } = this.props;
		let featured_image_url = detail._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url
		gallery.unshift(featured_image_url);
		this.setState({
			activeImage: gallery[0]
		})
	}

	switchFullImage = (id) => {
		this.setState({activeImage: this.props.gallery[id]})
	}

	render() {

		// let large = document.getElementById('large');
		// console.log(large.clientWidth)

		let { detail, gallery } = this.props;
		const thumbs = gallery.map((thumb, i) => {
			return gallery.length > 1 ?
				<div onClick={ () => { this.switchFullImage(i) }} className="thumbnailContainer" key={i}>
					<img className="thumbnail" src={thumb} alt={detail.title.rendered}/>
				</div>
			: null
		})
		return(
			<>
				{this.state.activeImage && 
				<img id="large" className="modal__gallery__full" src={this.state.activeImage} alt=""/>
				}
				<div className="modal__gallery">
					{thumbs.length > 1 &&
						<div className="modal__gallery__thumbs">
							{thumbs}
						</div>
					}
				</div>
			</>
		)
	}
}