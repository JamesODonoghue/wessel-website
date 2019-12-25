import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Volunteer from './components/Volunteer';

function App() {
	return (
		<Router>
			<Header/>
			<main>
				<Route path='/' exact component={About} />
				<Route path='/about' component={About} />
				<Route path='/volunteer' component={Volunteer} />
			</main>
		</Router>
	)
}
export default App;
