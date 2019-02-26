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

import largeliteraryart from '../images/carousel/large_literary_art.jpg';
import mediumliteraryart from '../images/carousel/medium_literary_art.jpg';
import smallliteraryart from '../images/carousel/small_literary_art.jpg';

import largeliteraryart2 from '../images/carousel/large_literary_art2.jpg';
import mediumliteraryart2 from '../images/carousel/medium_literary_art2.jpg';
import smallliteraryart2 from '../images/carousel/small_literary_art2.jpg';

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
				},
				{
					name: "vintage book art",
					small: smallliteraryart,
					medium: mediumliteraryart,
					large: largeliteraryart
				},
				{
					name: "vintage book art",
					small: smallliteraryart2,
					medium: mediumliteraryart2,
					large: largeliteraryart2
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
				alt={set.name}
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