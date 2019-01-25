import React, { Component } from 'react';
import { ContentProvider } from '../providers';
import { VerticalLayout, HorizontalLayout } from './';
import throttle from 'lodash/throttle';

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
		return(
			<ContentProvider>
				<div className="content">
					{ this.state.isSmall ?
					<VerticalLayout/>
					:
					<HorizontalLayout/>
					}
				</div>
			</ContentProvider>
		)
	}
}