import React from 'react';
import { Input, TextArea, LargeButton } from './forms';
import { SuccessToast } from './';
import { useContact } from './use-contact';

export const Contact = () => {

	const initialValues = {
		subject: "",
		email: "",
		message: "",
		name: "",
		success: false,
		valid_email: null
	}

	const [ values, onChange, validateEmail, submitForm ] = useContact(initialValues);

	return(
		<div className="static_content">
			<div className="aside">
				<aside>David's work is available for purchase at&nbsp;<a href="http://robinsgallery.com">Robin's&nbsp;Gallery</a></aside>
				<aside>2607 Lebanon Pike, Nashville, TN 37214</aside>
			</div>
			<div className="contact">
				<div className="contact_text">
					For more information or to place an order/commission, contact David at 615&#8209;885&#8209;1694
				</div>
				<div className="or">or</div>
				<div className="contact_form">
					<Input method={onChange} validate={() => null} label="Name" name="name" value={values.name}/>
					<Input method={onChange} validate={validateEmail} is_valid={values.valid_email} label="Email" name="email" value={values.email}/>
					<Input method={onChange} validate={() => null} label="Subject" name="subject" value={values.subject}/>
					<TextArea method={onChange} label="Message" name="message" value={values.message}/>
					<LargeButton disabled={values.valid_email} method={submitForm}>Submit</LargeButton>
					{values.success && <SuccessToast/>}
				</div>
			</div>
		</div>
	)
}