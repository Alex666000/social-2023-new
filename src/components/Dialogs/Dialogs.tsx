import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message  message={m.message} key={m.id}/>)

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

