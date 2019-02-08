import React from "react";
import { ContentContext } from "../Context";

export const ListSubcategories = ({
	activeCategory,
	swapSubcategory,
	activeSubcategory
}) => {
	return (
		<ul className="subcategories">
			<ContentContext.Consumer>
				{({ subcategories }) => {
					return (
						subcategories &&
						subcategories.map((subcat, i) => {
							return (
								<li
									onClick={() => {
										swapSubcategory(subcat.id);
									}}
									className={activeSubcategory === subcat.id ? "active" : null}
									key={i}
								>
									{subcat.name}
								</li>
							);
						})
					);
				}}
			</ContentContext.Consumer>
		</ul>
	);
};
