import { useState } from 'react';

export const useContact = (initialValues) => {
	const [ values, setValues ] = useState(initialValues);
	const [ recaptchaStatus, setRecaptchaStatus ] = useState(false);

	const onChange = (name, value) => {
		setValues({ ...values, [name]: value });
	}

	const validateEmail = () => {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setValues({...values, valid_email: re.test(values.email)});
	}

	const validateRecaptcha = (value) => {
		setRecaptchaStatus(value)
	}

	const submitForm = () => {
		fetch(`${process.env.REACT_APP_WP_CONTACT_ENDPOINT}`, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values)
		})
		.then(res => {
			return res.json()
		})
		.then(success => {
			setValues({
				success: true,
				name: "",
				email: "",
				subject: "",
				message: "",
				valid_email: false
			})
		}).then(() => {
			setTimeout(() => {
				setValues({
					success: false,
					name: "",
					email: "",
					subject: "",
					message: "",
					valid_email: false
				})
			}, 6000)
		})
	}

	return [ validateRecaptcha, recaptchaStatus, values, onChange, validateEmail, submitForm ];
}