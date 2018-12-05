import React from 'react';
import smallHeaderImg from '../images/smallHeader.jpg';
import mediumHeaderImg from '../images/mediumHeader.jpg';
import largeHeaderImg from '../images/largeHeader.jpg';
import smallLogoImg from '../images/smallLogo.png';
import largeLogoImg from '../images/largeLogo.png';

export const Header = () => {
	return(
		<header>
			<div className="headerImages">
				<img srcSet={smallHeaderImg + ' 500w, ' + mediumHeaderImg + ' 1000w, ' + largeHeaderImg + ' 2000w'} alt="header"/>
				<div className="scrim">
					<img srcSet={smallLogoImg + " 500w, " + largeLogoImg + ' 1000w'} alt="logo"/>
				</div>
			</div>
		</header>
	)
}