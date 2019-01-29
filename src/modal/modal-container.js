import React from 'react'
import { Spinner, Modal } from './';

export const ModalContainer = (props) => {
	let { close_detail, isFetching } = props.modal;
	return(
		<div onClick={() => { close_detail() }} className="modal__scrim">
			{isFetching ?
			<Spinner/>
			:
			<Modal modal={props.modal}/>
			}
		</div>
	)
}