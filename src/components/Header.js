import React from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <h1>Beth Wessel Kroeschell</h1>
            <div className="navbar">
                <NavLink to='/' style={{ padding: 10 }}>
                    Home
                </NavLink>
                <NavLink to='/about' style={{ padding: 10 }}>
                    About
                </NavLink>
                <NavLink to='/volunteer' style={{ padding: 10 }}>
                    Volunteer
                </NavLink>
                <button className="donate-button">Donate</button>
            </div>
        </header>
    )
}

export default Header