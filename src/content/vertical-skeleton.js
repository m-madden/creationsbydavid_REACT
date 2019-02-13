import React from 'react';

export const VerticalSkeleton = () => {
	return(
		<div className="vertical--skeleton">
			<ul className="categories">
				<li>
					<ul className="subcategories">
						<li></li>
						<li></li>
					</ul>
					<ul className="posts">
						<li></li>
						<li></li>
					</ul>
				</li>
				<li></li>
				<li></li>
			</ul>
		</div>
	)
}