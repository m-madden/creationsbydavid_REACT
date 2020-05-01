import { useState } from 'react';

export const useContact = (initialValues) => {
	const [ values, setValues ] = useState(initialValues);

	const onChange = (name, value) => {
		setValues({ ...values, [name]: value });
	}

	const validateEmail = () => {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setValues({
			...values, 
			valid_email: re.test(values.email)
		});
	}

	const verifyCallback = (response) => {
		setValues({
			...values,
			response_pending: true,
			error_message: null
		})
		fetch(`${process.env.REACT_APP_WP_CONTACT_ENDPOINT}`, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values)
		})
		.then(res => {
			console.log(res)
			return res.json()
		})
		.then(success => {
			if(success === false) {
				setValues({
					...values,
					success: false,
					valid_email: false,
					error_message: "There was a problem sending your message. Please try again.",
					response_pending: false
				})
			} else {
				setValues({
					success: true,
					name: "",
					email: "",
					subject: "",
					message: "",
					valid_email: false,
					error_message: null,
					response_pending: false
				})
				setTimeout(() => {
					setValues({
						...values,
						success: false,
					})
				}, 6000)
			}
		})
	}

	return [ values, onChange, validateEmail, verifyCallback ];
}