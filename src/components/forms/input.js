import React from 'react';

export const Input = ({ label, name, method, validate, is_valid, value }) => {
	return(
		<div className="input">
			<label>{label}</label>
			<input id={name} onChange={(e) => method(name, e.target.value)} onBlur={() => validate()} type="text" value={value}/>
			{ value !== "" && name === "email" && is_valid === false ?
			<span className="validation_message" >Enter a valid email address</span>
			: null }
		</div>
	)
}