import React, { Component } from 'react';
import largephotography from '../images/carousel/large_photography.jpg';
import largebathouses from '../images/carousel/large_bat_houses.jpg';
// import largeliteraryart from '../images/carousel/large_literary_art.jpg';
import largecustompens from '../images/carousel/large_custom_pens.jpg';
import smallLogoImg from '../images/smallLogo.png';
import largeLogoImg from '../images/largeLogo.png';

const sizes = ["small", "medium", "large"];
let intervalId;

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0,
			images: [
				{
					name: "photography",
					small: largephotography,
					medium: largephotography,
					large: largephotography
				},
				{
					name: "bat houses",
					small: largebathouses,
					medium: largebathouses,
					large: largebathouses
				},
				{
					name: "custom pens",
					small: largecustompens,
					medium: largecustompens,
					large: largecustompens
				}
			]
		}
		this.switchSlide = this.switchSlide.bind(this);
	}

	switchSlide = (key) => {
		this.setState({ activeSlide: key }, () => {
			window.clearInterval(intervalId)
		})
	}

	render() {

		let { images, activeSlide } = this.state;

		let controls = images.map((category, i) => {
			return(
				<div className={activeSlide === i ? "active" : null} onClick={() => { this.switchSlide(i) }} key={i}></div>
			)
		})

		let slides = images.map((set, i) => {
			return(
				<img className={activeSlide === i ? "active" : null} key={i} srcSet={`${set.small} 500w, ${set.medium} 1000w, ${set.large} 2000w`}/>
			)
		})

		let title = images.map((set, i) => {
			return(
				<div key={i} className={activeSlide === i ? "mainHeader__slideTitle active" : "mainHeader__slideTitle"}>{set.name}</div>
			)
		})

		return(
			<header className="mainHeader">
				<div className="mainHeader__carouselContainer">
					{slides}
				</div>
				<div className="mainHeader__carouselControl">{controls}</div>
				{title}
				<img className="mainHeader__logo" srcSet={smallLogoImg + " 500w, " + largeLogoImg + ' 1000w'} alt="logo"/>
			</header>
		)
	}
}