import React from 'react'
import { CategoriesContext } from '../Context';

export const ContentNav = () => {

	return(
		<CategoriesContext.Consumer>
			{({categories, active_category, switch_category}) => {
				let catNames = categories.length ? 
				categories.map((cat, i) => {
					return(
						<button onClick={() => {switch_category(cat.name)}} className={cat.name === active_category.name ? "contentNav__category active" : "contentNav__category"} key={i}>{cat.name}</button>
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