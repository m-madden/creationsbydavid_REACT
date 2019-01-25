import React, { Component, Fragment } from 'react';
import { ContentContext } from '../Context';
import { PostsArea } from './'

class BaseListCategories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeCategory: null
		}
		this.swapCategory = this.swapCategory.bind(this);
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({ activeCategory: nextProps.categories[0].id })
	}

	swapCategory = (id) => {
		this.setState({ activeCategory: id })
	}

	render() {
		let { activeCategory } = this.state
		let { verticalLayout, categories } = this.props
		return(
			<Fragment>
			<ul className={verticalLayout ? "categories vertical" : "categories"}>
				{categories &&
					categories.map((category, i) => {
						return(
							<Fragment key={i}>
								<li className={category.id === activeCategory ? "active" : null} onClick={() => { this.swapCategory(category.id) }}>{category.name}</li>
								{verticalLayout && (category.id === activeCategory) ?
								<PostsArea activeCategory={activeCategory}/>
								: null
								}
							</Fragment>
						)
					})
				}
			</ul>
			{!verticalLayout && <PostsArea activeCategory={activeCategory}/>}
			</Fragment>
		)
	}
}

export const ListCategories = (props) => (
	<ContentContext.Consumer>
		{ ({categories}) => 
			<BaseListCategories {...props} categories={categories} />
		}
	</ContentContext.Consumer>
);