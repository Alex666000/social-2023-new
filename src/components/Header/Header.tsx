import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: (email: string | null, password: string | null, rememberMe: boolean) => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8yndOQhIaFf36hkWn9w6UAff4nmPREbmvQ&usqp=CAU'
                alt="react-logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={() => {props.logout} }>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>  }

            </div>
        </header>
    );
};

