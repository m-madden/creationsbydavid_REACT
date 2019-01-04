import React from 'react'
import { ContentContext } from '../Context';
import { SubCategories } from './';

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
			{({categories, active_category, switch_category, open_post}) => {
				// let catNames = categories.length ? 
				// categories.map((cat, i) => {
				// 	// console.log(cat)
				// 	if(cat.parent === 0) {
				// 		return(
				// 			<div className="contentNav__catGroup" key={i}>
				// 				<button disabled={cat.id === active_category} onClick={() => {switch_category(cat.id)}} className={cat.id === active_category ? "contentNav__catGroup--name active" : "contentNav__catGroup--name"}>{cat.name}</button>
				// 				{cat.id === active_category ?
				// 					<InlineCategory parent={cat.parent} posts={cat.posts} open_post={open_post}/>
				// 				: null}
				// 			</div>
				// 		)
				// 	}
				// })
				// : null
				return(
					<nav className="contentNav">
						{categories ? 
							Object.keys(categories).map((cat, i) => {
								let category = categories[cat];
								return(
									category.parent === 0 ?
									<div className="contentNav__catGroup" key={i}>
										<button disabled={i === active_category} onClick={() => {switch_category(i)}}>{category.name}</button>
										<SubCategories parent={category.id} categories={categories}/>
									</div>
									: null
								)
							})
						: null
					}
					</nav>
				)
			}}
		</ContentContext.Consumer>
	)
}