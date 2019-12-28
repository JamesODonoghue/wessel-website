import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
// import Home from '../Home';
import About from '../About';
import VolunteerSignUp from '../VolunteerSignUp';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SignUpPage from '../SignUp';
import Landing from '../Landing';
import Menu from '../Menu';
import { ROUTES } from '../../constants/routes';

const App = () => {
    return (
        <Router>
            <Navigation />
            <main>
                <Route path={ROUTES.LANDING} exact component={Landing} />
                <Route path={ROUTES.ABOUT} component={About} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.VOLUNTEER} component={VolunteerSignUp} />
                <Route path={ROUTES.ADMIN} />
            </main>
            <Footer/>
        </Router>
    )
}
export default App;
