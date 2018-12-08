import React from 'react';
import { CategoryContext } from '../Context';
import { Item } from './';

export const Section = () => {

	return(
		<CategoryContext.Consumer>
			{ ({ posts }) => {
				let items = posts.map((item, i) => {
					return(
						<Item key={i} item={item} delay={i*150}/>
					)
				})
				return(
					<div className="section">
						{items}
					</div>
				)
			}}
		</CategoryContext.Consumer>
	)
}