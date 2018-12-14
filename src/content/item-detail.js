import React, { Component } from 'react';
import Portal from './portal.js';

export class ItemDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeThumb: this.props.gallery[0]
		}
		this.convertHTML = this.convertHTML.bind(this);
	}

	convertHTML = (string) => {
		return string.replace(/(<([^>]+)>)/ig,"");
	}

	switchImage = (index) => {
		this.setState({
			activeThumb: this.props.gallery[index]
		})
	}

	render() {

		let {isOpen, isFetching, close_item, detail, gallery} = this.props
		let thumbs = null
		if(isOpen && !isFetching) {
			thumbs = gallery.map((thumb, i) => {
				return(
					<img onClick={() => {this.switchImage(i)}} className="modal__image-block--thumbs--thumb" src={thumb} alt={detail.title.rendered} key={i}/>
				)
			})
		}
		
		return(
			<Portal isOpen={isOpen}>
				<div onClick={() => {close_item()}} className="modalScrim">
				{isOpen && !isFetching ?
					<div onClick={(e) => {e.stopPropagation()}} className="modal">
						<div className="modal__image-block">
							<img className="modal__image-block--main" src={this.state.activeThumb} alt={detail.title.rendered}/>
							<div className="modal__image-block--thumbs">
								{thumbs}
							</div>
						</div>
						<p>{this.convertHTML(detail.excerpt.rendered)}</p>
					</div>
				: <div className="spinner"></div>}
				</div>
			</Portal>
		)
	}
}