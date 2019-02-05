import React from 'react';
import './App.scss';
import { Header, Map, Footer } from './components';
import { Content } from './content';

const App = () => {
		
	return (
		<div className="App">
			<Header/>
			<Content/>
			<Map/>
			<Footer/>
		</div>
	);
}

export default App;
