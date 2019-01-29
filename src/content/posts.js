import React, { Fragment } from 'react';
import { ContentContext, ModalContext } from '../Context';
import { ModalProvider } from '../providers';
import { Portal } from '../modal';

export const Posts = ({ parent }) => {
	return (
		<div className="posts">
			<ModalProvider>
				<ModalContext.Consumer>
					{(modal) => {
						return (
							<Fragment>
								{modal.isOpen && <Portal modal={modal}/>}
								<ContentContext.Consumer>
									{({ posts }) => {
										return (
											posts &&
											posts.map((post, i) => {
												return (
													post.categories.includes(parent) &&
													<div onClick={() => modal.open_detail(post.id)} className="post" key={i}>
														<img src={post.featured_image} />
														<p>{post.name}</p>
													</div>
												)
											})
										)
									}}
								</ContentContext.Consumer>
							</Fragment>
						)
					}}
				</ModalContext.Consumer>
			</ModalProvider>
		</div>
	)
}