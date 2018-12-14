import React, { Component, Fragment } from 'react'
import { ItemContext } from "../Context";
import { ItemProvider } from '../providers';
import { ItemDetail } from './';

export class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hidden: "hidden"
		}
		this.show = this.show.bind(this)
	}

	componentDidMount = () => {
		let that = this;
		window.setTimeout(function() {
			that.show();
		}, that.props.delay * 300)
	}

	show = () => {
		this.setState({hidden: ""})
	}

	render() {
		let { item } = this.props
		return(
			<ItemProvider>
				<ItemContext.Consumer>
					{({isOpen, isFetching, open_item, close_item, detail}) => {
						return(
							<Fragment>
							<div onClick={() => open_item(item.ID)} className={"item " + this.state.hidden}>
								<img src={item.fimg} alt={item.title}/>
								<p>{item.title}</p>
							</div>
							{isOpen ?
							<ItemDetail isFetching={isFetching} close_item={close_item} isOpen={isOpen} detail={detail} gallery={item.gallery.src} />
							: null
							}
							</Fragment>
						)
					}}
				</ItemContext.Consumer>
			</ItemProvider>
		)
	}
}