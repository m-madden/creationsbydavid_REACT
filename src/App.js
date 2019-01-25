import React from 'react';
import './App.scss';
import { Header, Carousel, Map, Footer } from './components';
import { Content } from './content';

const App = () => {
		
	return (
		<div className="App">
			<Header/>
			<Carousel/>
			<Content/>
			<Map/>
			<Footer/>
		</div>
	);
}

export default App;
