import React from 'react';
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';
import './Menu.css'
class Navigation extends React.Component<any, any> {
    isOpen: boolean
    constructor(props: any) {
        super(props);
        this.state = { isOpen: false }
    }
    render() {
        const { isOpen } = this.state;
        return (
            <header className="header">
                <h1>Beth Wessel Kroeschell</h1>
                <div className={`navbar ${isOpen ? 'open' : ''}`}>
                    <NavLink onClick={() => this.setState({ isOpen: false })} to={ROUTES.LANDING}>Home</NavLink>
                    <NavLink onClick={() => this.setState({ isOpen: false })} to={ROUTES.ABOUT}>About</NavLink>
                    <NavLink onClick={() => this.setState({ isOpen: false })} to={ROUTES.VOLUNTEER}>Volunteer</NavLink>
                    <button className="donate-button">Donate</button>
                </div>
                <button onClick={() => this.setState({ isOpen: !isOpen })} className={`hamburger hamburger--slider ${isOpen ? 'is-active' : ''}`} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </header>
        )
    }
}

export default Navigation
