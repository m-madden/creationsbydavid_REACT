import React from 'react';
import './App.scss';
import { Header, Slideshow, ContentArea, Map, Footer } from './components';

const App = () => {
		
	return (
		<div className="App">
			<Header/>
			<Slideshow/>
			<ContentArea/>
			<Map/>
			<Footer/>
		</div>
	);
}

export default App;
