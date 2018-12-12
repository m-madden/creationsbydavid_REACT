import React from 'react'
import { ContentContext } from '../Context';
import { InlineCategory } from './';

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
		<ContentContext.Consumer>
			{({content, active_category, switch_category}) => {
				let catNames = content.length ? 
				content.map((cat, i) => {
					return(
						<div className="contentNav__catGroup" key={i}>
							<button disabled={cat.id === active_category} onClick={() => {switch_category(cat.id)}} className={cat.id === active_category ? "contentNav__catGroup--name active" : "contentNav__catGroup--name"}>{cat.name}</button>
							{cat.id === active_category ?
								<InlineCategory posts={cat.posts}/>
							: null}
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
		</ContentContext.Consumer>
	)
}