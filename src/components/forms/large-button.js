import React from 'react';

export const LargeButton = ({ children, disabled, method }) => {
	return(
		<button disabled={!disabled} onClick={() => method()} className="large_button">
			{children}
		</button>
	)
}