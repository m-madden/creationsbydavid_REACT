import React, { Fragment } from 'react';
import { ListCategories } from './'

export const HorizontalLayout = () => {
	return(
		<Fragment>
			<ListCategories verticalLayout={false}/>
		</Fragment>
	)
}