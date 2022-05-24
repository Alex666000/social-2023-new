import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className={'nav'}>
            <div>
                <a href="src/components/Navbar#">Profile</a>
            </div>
            <div>
                <a href="src/components/Navbar#">Messages</a>
            </div>
            <div>
                <a href="src/components/Navbar#">News</a>
            </div>
            <div>
                <a href="src/components/Navbar#">Music</a>
            </div>
            <div>
                <a href="src/components/Navbar#">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;