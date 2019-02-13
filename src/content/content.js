import React, { Component } from 'react';
import { ContentProvider } from '../providers';
import { VerticalSkeleton, HorizontalSkeleton, VerticalLayout, HorizontalLayout } from './';
import throttle from 'lodash/throttle';
import { ContentContext } from '../Context';

const breakpoint = 900;

export class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSmall: window.innerWidth <= breakpoint
		}
	}

	throttledHandleWindowResize = () => {
		this.setState({ isSmall: window.innerWidth <= breakpoint })
	}

	componentDidMount() {
		window.addEventListener('resize', throttle(this.throttledHandleWindowResize, 200));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', throttle(this.throttledHandleWindowResize, 200));
	}

	render() {
		return (
			<ContentProvider>
				<ContentContext.Consumer>
					{({isFetching}) => {
						return (
							<div className="content">
								{this.state.isSmall ?
									isFetching ? 
									<VerticalSkeleton/>
									:
									<VerticalLayout />
									:
									isFetching ?
									<HorizontalSkeleton/>
									:
									<HorizontalLayout />
								}
							</div>
						)
					}}
				</ContentContext.Consumer>
			</ContentProvider>
		)
	}
}