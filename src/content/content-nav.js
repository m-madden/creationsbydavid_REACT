import React from 'react'
import { CategoriesContext } from '../Context';
import { Section } from './';

export const ContentNav = () => {

	// function debounce(func, wait, immediate) {
	// 	var timeout;
	// 	return function() {
	// 		var context = this, args = arguments;
	// 		var later = function() {
	// 			timeout = null;
	// 			if (!immediate) func.apply(context, args);
	// 		};
	// 		var callNow = immediate && !timeout;
	// 		clearTimeout(timeout);
	// 		timeout = setTimeout(later, wait);
	// 		if (callNow) func.apply(context, args);
	// 	};
	// };

	// let resize = debounce(function() {
	// 	let width = window.innerWidth
	// 	return width
	// }, 250);

	// window.onresize = resize
	
	return(
		<CategoriesContext.Consumer>
			{({categories, active_category, switch_category}) => {
				let catNames = categories.length ? 
				categories.map((cat, i) => {
					return(
						<div className="contentNav__catGroup" key={i}>
							<button disabled={cat.name === active_category.name} onClick={() => {switch_category(cat)}} className={cat.name === active_category.name ? "contentNav__catGroup--name active" : "contentNav__catGroup--name"}>{cat.name}</button>
							{cat.name === active_category.name ? <Section/> : null}
						</div>
						)
				})
				: null
				return(
					<nav className="contentNav">
						{catNames}
					</nav>
				)
			}}
		</CategoriesContext.Consumer>
	)
}