import React from 'react'
import { Spinner, Modal } from './';

export const ModalContainer = (props) => {
	let { isFetching, isOpen, open_detail, ...rest } = props.modal;
	return(
		<div onClick={() => { props.modal.close_detail() }} className="modal__scrim">
			{isFetching ?
			<Spinner/>
			:
			<div className="modalContainer">
				<Modal {...rest}/>
				<div onClick={() => {props.modal.close_detail()}} className="modal__close"></div>
			</div>
			}
		</div>
	)
}