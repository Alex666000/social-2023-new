import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    id: string
    name: string
}
type MessagePropsType = {
    message: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};
export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs: React.FC = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Margarita'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Svetlana'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Valera'} id={'5'}/>
                <DialogItem name={'Victor'} id={'6'}/>
                <div className={s.dialog}>
                </div>
                <div className={s.messages}>
                    <Message message={'Hello'}/>
                    <Message message={'How are you?'}/>
                    <Message message={'What is your name'}/>
                </div>
            </div>
        </div>
    );
};

