import React from 'react';
import { CategoriesContext } from '../Context';
import { Categories, Category } from '../providers';
import { ContentNav, Section } from '../content';

export const Content = (props) => {
	return(
		<div className="content">
		<Categories>
			
			<CategoriesContext.Consumer>
				{({active_category}) => {
					return(
						<Category active_category={active_category}>
						<ContentNav/>
						{/* <Section/> */}
					</Category>
				)}}
			</CategoriesContext.Consumer>
		</Categories>
		</div>
	)
}