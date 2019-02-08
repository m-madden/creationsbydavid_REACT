import React from 'react';

export const Footer = (props) => {

	const date = new Date;
	const year = date.getFullYear();

	return(
		<footer className="mainFooter">
			Copyright &copy; {year} David McCullars
		</footer>
	)
}