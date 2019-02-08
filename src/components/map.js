import React, { Component, Fragment } from 'react';

const google = window.google

export class Map extends Component {
	constructor(props) {
		super(props);
		this.mapRef = React.createRef();
	}

	componentDidMount = () => {
		let infoWindowContent = "<h4>Robin's Gallery</h4>" +
			"<p>Art, Gifts, Home D&eacute;cor, Custom Framing</p>" +
			"<p class='small'>2607 Lebanon Pike, Nashville, TN 37214</p>" +
			"<p class='small'>615-885-1694</p>" +
			"<a class='x-small' href='http://robinsgallery.com'>robinsgallery.com</a>";

		let infowindow = new google.maps.InfoWindow({
			content: infoWindowContent
		});

		let map = new google.maps.Map(this.mapRef.current, {
			zoom: 11,
			gestureHandling: "greedy",
			center: {
				lat: 36.1696029,
				lng: -86.6751029
			}
		})

		let marker = new google.maps.Marker({
			position: new google.maps.LatLng(36.1696029, -86.6751029),
			map,
			icon: require("../images/mapIcon.png")
		})

		marker.addListener('click', function() {
			infowindow.open(map, marker)
		});
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