import React from 'react';
import s from './Header.module.css'

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8yndOQhIaFf36hkWn9w6UAff4nmPREbmvQ&usqp=CAU'
                alt="react-logo"/>
        </header>
    );
};

export default Header;