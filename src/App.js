import React from 'react';
import './App.scss';
import { Header, Map, Contact, Footer } from './components';
import { Content } from './content';

const App = () => {
		
	return (
		<div className="App">
			<Header/>
			<Content/>
			<Contact/>
			<Map/>
			<Footer/>
		</div>
	);
}

export default App;
