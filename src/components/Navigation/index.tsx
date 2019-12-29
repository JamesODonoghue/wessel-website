import React, { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';
import './Menu.css'
class Navigation extends React.Component<any, any> {
    isOpen: boolean
    constructor(props: any) {
        super(props);
        this.state = { isOpen: false }

        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

    }

    handleLinkClick(e: MouseEvent) {
        this.setState({ isOpen: false })
    }

    handleButtonClick(e: MouseEvent) {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { isOpen } = this.state;
        return (
            <header className="header">
                <h1>Beth Wessel Kroeschell</h1>
                <div className={`navbar ${isOpen ? 'open' : ''}`}>
                    <NavLink onClick={this.handleLinkClick} to={ROUTES.LANDING}>Home</NavLink>
                    <NavLink onClick={this.handleLinkClick} to={ROUTES.ABOUT}>About</NavLink>
                    <NavLink onClick={this.handleLinkClick} to={ROUTES.MEDIA}>Media</NavLink>
                    <NavLink onClick={this.handleLinkClick} to={ROUTES.VOLUNTEER}>Volunteer</NavLink>
                    <button className="donate-button">Donate</button>
                </div>
                <button onClick={this.handleButtonClick} className={`hamburger hamburger--slider ${isOpen ? 'is-active' : ''}`} type="button">
                    <span id="hamburger-menu" className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </header>
        )
    }
}

export default Navigation
