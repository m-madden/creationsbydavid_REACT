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
												let thumb_url = post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
												return (
													post.categories.includes(parent) &&
													<div onClick={() => modal.open_detail(post.id)} className="post" key={i}>
														<img src={thumb_url} alt={post.title.rendered}/>
														<p>{post.title.rendered}</p>
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