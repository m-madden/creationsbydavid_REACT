import React from 'react';
import { CategoriesContext } from '../Context';
import { Categories, Category } from '../providers';
import { ContentNav, Section } from '../content';

export const Content = (props) => {
	return(
		<div className="content">
		<Categories>
			<ContentNav/>
			<CategoriesContext.Consumer>
				{({active_category}) => (
					<Category active_category={active_category}>
						<Section/>
					</Category>
				)}
			</CategoriesContext.Consumer>
		</Categories>
		</div>
	)
}