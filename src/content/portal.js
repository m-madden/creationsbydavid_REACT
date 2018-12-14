import { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');
const body = document.getElementById('body');

class Portal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount = () => {
		if(this.props.isOpen) {
			modalRoot.appendChild(this.el);
			body.className= "no-scroll";
		}
	}

	componentWillUnmount = () => {
		modalRoot.removeChild(this.el);
		body.className = "";
	}

	render() {
		return(
			this.props.isOpen ?
			ReactDOM.createPortal(this.props.children, this.el)
			: null
		)
	}
}

export default Portal