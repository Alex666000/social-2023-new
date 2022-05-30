import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs: React.FC = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to={'dialogs/1'}>Margarita</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'dialogs/2'}>Andrey</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'dialogs/3'}>Svetlana</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'dialogs/4'}>Sasha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'dialogs/5'}>Victor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'dialogs/6'}>Valera</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>How are you?</div>
                    <div className={s.message}>What is your name</div>
                </div>
            </div>
        </div>
    );
};

