import React from 'react';
import './Menu.css'
class Menu extends React.Component<any, any> {
    isOpen: boolean
    constructor(props: any) {
        super(props);
        this.state = { isOpen: false }
    }
    render() {
        const { isOpen } = this.state;
        return (
            <div className="menu">
                <button onClick={() => this.setState({ isOpen: !isOpen })} className={`hamburger hamburger--slider ${isOpen ? 'is-active' : ''}`} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className="menu__container">
                    
                </div>
            </div>
        )
    }
}

export default Menu