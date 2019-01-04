import React from 'react';
import './App.scss';
import { Header, Carousel, ContentArea, Map, Footer } from './components';

const App = () => {
		
	return (
		<div className="App">
			<Header/>
			<Carousel/>
			<ContentArea/>
			<Map/>
			<Footer/>
		</div>
	);
}

export default App;
