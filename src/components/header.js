import React, { Component } from 'react';
import largephotography from '../images/carousel/large_photo.jpg';
import mediumphotography from '../images/carousel/medium_photo.jpg';
import smallphotography from '../images/carousel/small_photo.jpg';

// import largebathouses from '../images/carousel/large_bat_houses.jpg';
// import mediumbathouses from '../images/carousel/medium_bat_houses.jpg';
// import smallbathouses from '../images/carousel/small_bat_houses.jpg';

import largecustompens from '../images/carousel/large_custom_pens.jpg';
import mediumcustompens from '../images/carousel/medium_custom_pens.jpg';
import smallcustompens from '../images/carousel/small_custom_pens.jpg';

import largepainting from '../images/carousel/large_painting.jpg';
import mediumpainting from '../images/carousel/medium_painting.jpg';
import smallpainting from '../images/carousel/small_painting.jpg';

import largeliteraryart2 from '../images/carousel/large_literary_art.jpg';
import mediumliteraryart2 from '../images/carousel/medium_literary_art.jpg';
import smallliteraryart2 from '../images/carousel/small_literary_art.jpg';

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
					name: "paintings",
					small: smallpainting,
					medium: mediumpainting,
					large: largepainting
				},
				{
					name: "vintage book art",
					small: smallliteraryart2,
					medium: mediumliteraryart2,
					large: largeliteraryart2
				},
				{
					name: "handmade pens",
					small: smallcustompens,
					medium: mediumcustompens,
					large: largecustompens
				}
			].sort(() => { return 0.5 - Math.random()})
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
				<picture key={i}>
					<source 
						media="(max-width: 430px)"
						srcSet={`${set.small}`}/>
					<source
						media="(max-width: 800px"
						srcSet={`${set.medium}`}/>
					<source
						media="(min-width: 800px"
						srcSet={`${set.large}`}/>
					<img src={`${set.small}`} className={activeSlide === i ? "active" : null} alt=""/>
				</picture>
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