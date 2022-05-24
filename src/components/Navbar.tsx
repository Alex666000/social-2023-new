import React from 'react';
import './Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav className={'nav'}>
            <div className={'item'}>
                <a href="src/components/Navbar#">Profile</a>
            </div>
            <div className={'item'}>
                <a href="src/components/Navbar#">Messages</a>
            </div>
            <div className={'item'}>
                <a href="src/components/Navbar#">News</a>
            </div>
            <div className={'item'}>
                <a href="src/components/Navbar#">Music</a>
            </div>
            <div className={'item'}>
                <a href="src/components/Navbar#">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;