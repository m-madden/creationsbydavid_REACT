import React from 'react';

export const TextArea = ({ label, name, method, value }) => {
	return(
		<div className="textarea">
			<label>{label}</label>
			<textarea name={name} onChange={(e) => method(name, e.target.value)} value={value}>
			{value}
			</textarea>
		</div>
	)
}