import React, { Component } from 'react';
import './App.css';
import {Header, Slideshow, Content, Map, Footer} from './components';

const App = () => {
		
	return (
		<div className="App">
			<Header/>
			<Slideshow/>
			<Content/>
			<Map/>
			<Footer/>
		</div>
	);
}

export default App;
