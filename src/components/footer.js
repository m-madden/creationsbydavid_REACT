import React from 'react';

export const Footer = () => {

	const date = new Date();
	const year = date.getFullYear();

	return(
		<footer className="mainFooter">
			Copyright &copy; {year} David McCullars
		</footer>
	)
}