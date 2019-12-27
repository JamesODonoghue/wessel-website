import React from 'react';
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';

function Navigation() {
    return (
        <header className="header">
            <h1>Beth Wessel Kroeschell</h1>
            <div className="navbar">
                <NavLink to={ROUTES.LANDING}>Home</NavLink>
                <NavLink to={ROUTES.ABOUT}>About</NavLink>
                <NavLink to={ROUTES.VOLUNTEER}>Volunteer</NavLink>
                <button className="donate-button">Donate</button>
            </div>
        </header>
    )
}

export default Navigation