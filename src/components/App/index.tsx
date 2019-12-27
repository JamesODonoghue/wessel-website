import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
// import Home from '../Home';
import About from '../About';
import VolunteerSignUp from '../VolunteerSignUp';
import Navigation from '../Navigation';
import { Routes } from '../../constants/routes';

const App = () => {
	return (
		<Router>
			<Navigation/>
			<main>
				<Route path={Routes.LANDING} exact component={About} />
				<Route path={Routes.ABOUT} component={About} />
				<Route path={Routes.VOLUNTEER} component={VolunteerSignUp} />
			</main>
		</Router>
	)
}
export default App;
