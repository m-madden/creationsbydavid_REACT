import React from 'react';
import { ContentContext } from '../Context';

export const Posts = ({ parent }) => {
	return(
		<div className="posts">
			<ContentContext.Consumer>
				{({ posts }) => {
					return(
						posts &&
						posts.map((post, i) => {
							return(
								post.categories.includes(parent) &&
								<div className="post" key={i}>
									<img src={post.featured_image}/>
									<p>{post.name}</p>
								</div>
							)
						})
					)
				}}
			</ContentContext.Consumer>
		</div>
	)
}