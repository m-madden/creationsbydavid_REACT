import React, { Component, Fragment } from 'react';

const google = window.google

export class Map extends Component {
	constructor(props) {
		super(props);
		this.mapRef = React.createRef();
	}

	componentDidMount = () => {
		let map = new google.maps.Map(this.mapRef.current, {
			zoom: 11,
			gestureHandling: "greedy",
			clickableIcons: false,
			center: {
				lat: 36.1696029,
				lng: -86.6751029
			}
		})
		return new google.maps.Marker({
			position: new google.maps.LatLng(36.1696029, -86.6751029),
			map,
			icon: require("../images/mapIcon.png")
		})
	}

	render() {
		return(
			<Fragment>
				<aside>David's work is available for purchase at <a href="http://robinsgallery.com">Robin's&nbsp;Gallery</a> in Nashville,&nbsp;TN</aside>
				<div className="map">
					<div id="map" ref={this.mapRef}>Loading...</div>
				</div>
			</Fragment>
		)
	}
}