import React from 'react';
import { CategoryContext } from '../Context';

export const Section = () => {
	return(
		<CategoryContext.Consumer>
			{ ({ posts }) => {
				let items = posts.map((item, i) => {
					return(
						<div key={i}>
							<img src={item.fimg_url} alt={item.slug}/>
							{item.slug}
						</div>
					)
				})
				return(
				<div>
					{items}
				</div>
				)
			}}
		</CategoryContext.Consumer>
	)
}