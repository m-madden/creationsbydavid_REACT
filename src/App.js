import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: null
		}
	}
	componentDidMount() {
		let api = `${process.env.REACT_APP_API_ROOT}posts`
		fetch(api)
		.then(res => res.json())
		.then(response => {
			this.setState({content: document.write(response[0].content.rendered)})
		})		
	}

  render() {
    return (
      <div className="App">
        {this.state.content}
      </div>
    );
  }
}

export default App;
