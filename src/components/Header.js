import React from 'react';
import logo from '../school.jpg';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header;