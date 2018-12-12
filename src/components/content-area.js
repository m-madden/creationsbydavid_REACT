import React from 'react';
import { ContentContext } from '../Context';
import { Content } from '../providers';
import { ContentNav } from '../content';

export const ContentArea = (props) => {
	return(
		<div className="content">
		<Content>
			
			<ContentContext.Consumer>
				{({active_category}) => {
					return(
						<ContentNav/>
				)}}
			</ContentContext.Consumer>
		</Content>
		</div>
	)
}