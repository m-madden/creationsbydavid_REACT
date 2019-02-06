import React, { Component } from 'react';
import largephotography from '../images/carousel/large_photography.jpg';
import mediumphotography from '../images/carousel/medium_photography.jpg';
import smallphotography from '../images/carousel/small_photography.jpg';

import largebathouses from '../images/carousel/large_bat_houses.jpg';
import mediumbathouses from '../images/carousel/medium_bat_houses.jpg';
import smallbathouses from '../images/carousel/small_bat_houses.jpg';

import largecustompens from '../images/carousel/large_custom_pens.jpg';
import mediumcustompens from '../images/carousel/medium_custom_pens.jpg';
import smallcustompens from '../images/carousel/small_custom_pens.jpg';

import smallLogoImg from '../images/smallLogo.png';
import largeLogoImg from '../images/largeLogo.png';

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0,
			images: [
				{
					name: "photography",
					small: smallphotography,
					medium: mediumphotography,
					large: largephotography
				},
				{
					name: "bat houses",
					small: smallbathouses,
					medium: mediumbathouses,
					large: largebathouses
				},
				{
					name: "custom pens",
					small: smallcustompens,
					medium: mediumcustompens,
					large: largecustompens
				}
			]
		}
		this.switchSlide = this.switchSlide.bind(this);
	}

	switchSlide = (key) => {
		this.setState({ activeSlide: key })
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
				<img className={activeSlide === i ? "active" : null} key={i} 
				src={set.small}
				srcSet={`${set.small} 430w, ${set.medium} 800w, ${set.large} 1366w`}
				/>
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