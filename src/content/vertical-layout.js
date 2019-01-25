import React, { Fragment } from 'react';
import { ListCategories } from './';

export const VerticalLayout = () => {

	return(
		<Fragment>
			<ListCategories verticalLayout={true}/>
		</Fragment>
	)
}