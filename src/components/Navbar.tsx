import React from 'react';
import s from './Navbar.module.css'

console.log(s)

const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="src/components/Navbar#">Profile</a>
            </div>
            {/*ставим класс item active*/}
            <div className={` ${s.item} ${s.active} `}>
                <a href="src/components/Navbar#">Messages</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar#">News</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar#">Music</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar#">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;