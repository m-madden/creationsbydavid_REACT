import React, { Component } from 'react';
import { ListSubcategories } from './'
import { ContentContext } from '../Context';
import { Posts } from './';

export class BasePostsArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasSubcategories: false,
			subcategories: null,
			activeSubcategory: null
		}
		this.swapSubcategory = this.swapSubcategory.bind(this);
	}

	componentDidMount = () => {
		let { activeCategory, subcategories } = this.props;
		if (subcategories) {
			let subcatArray = subcategories.map((subcat) => {
				if(subcat.parent === activeCategory) {
					return subcat
				}
				return undefined
			}).filter((el) => el !== undefined);
			this.setState({
				hasSubcategories: subcatArray.length !== 0,
				subcategories: subcatArray.length !== 0 ? subcatArray : null,
				activeSubcategory: subcatArray.length !== 0 ? subcatArray[0].id : null,
			})
		}
	}

	componentWillReceiveProps = (nextProps) => {
		let { activeCategory, subcategories } = nextProps;
		if (subcategories) {
			let subcatArray = subcategories.map((subcat) => {
				if(subcat.parent === activeCategory) {
					return subcat
				}
				return undefined
			}).filter((el) => el !== undefined);
			this.setState({
				hasSubcategories: subcatArray.length !== 0,
				subcategories: subcatArray.length !== 0 ? subcatArray : null,
				activeSubcategory: subcatArray.length !== 0 ? subcatArray[0].id : null,
			})
		}
	}

	swapSubcategory = (id) => {
		this.setState({ activeSubcategory: id })
	}

	render() {
		let { activeSubcategory, hasSubcategories } = this.state;
		let { activeCategory } = this.props;
		return (
			hasSubcategories ?
			<div className="postsArea">
				<ListSubcategories activeCategory={activeCategory} swapSubcategory={this.swapSubcategory} activeSubcategory={activeSubcategory} />
				<Posts parent={activeSubcategory} />
			</div>
			:
			<div className="postsArea">
				<Posts parent={activeCategory} />
			</div>
		)
	}
}

export const PostsArea = (props) => (
	<ContentContext.Consumer>
		{({ subcategories }) =>
			<BasePostsArea {...props} subcategories={subcategories} />
		}
	</ContentContext.Consumer>
);