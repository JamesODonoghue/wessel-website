import React from 'react';
import { NavLink } from 'react-router-dom'
import { Routes } from '../../constants/routes';

function Navigation() {
    return (
        <header className="header">
            <h1>Beth Wessel Kroeschell</h1>
            <div className="navbar">
                <NavLink to={Routes.LANDING}>Home</NavLink>
                <NavLink to={Routes.ABOUT}>About</NavLink>
                <NavLink to={Routes.VOLUNTEER}>Volunteer</NavLink>
                <button className="donate-button">Donate</button>
            </div>
        </header>
    )
}

export default Navigation