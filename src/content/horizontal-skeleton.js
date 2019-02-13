import React from 'react';

export const HorizontalSkeleton = () => {
	return(
		<div className="horizontal--skeleton">
			<ul className="tabs">
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className="posts">
				<ul className="subcats">
					<li></li>
					<li></li>
				</ul>
				<ul className="post--area">
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	)
}