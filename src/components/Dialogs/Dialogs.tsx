import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';

export const Dialogs: React.FC = (props) => {
    let dialogs = [
        {id: 1, name: 'Margarita'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Victor'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name'},
        {id: 4, message: 'My name is....'},
        {id: 5, message: 'Let\'s go'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
};

