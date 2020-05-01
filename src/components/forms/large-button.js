import React from 'react';
import spinner from '../../images/spinner.png';

export const LargeButton = ({ children, disabled = false, method, showSpinner = false }) => {
	return(
		<button disabled={disabled} onClick={() => method()} className="large_button">
			<span>{children}</span>
			<div className={`spinnerContainer ${showSpinner && " showSpinner"}`}>
				<img className="formSpinner" src={spinner} alt="sending..."/>
			</div>
		</button>
	)
}