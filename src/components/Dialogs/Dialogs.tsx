import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType, StoreType} from '../../redux/store';

type DialogsPropsType = {
    updateNewMessageBody: (value: string)=> void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget?.value)
    }
    const sendMessageClick = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea
                                value={props.dialogsPage.newMessageBody}
                                onChange={onNewMessageChange}
                                placeholder="Enter your message"
                            ></textarea></div>
                        <div onClick={sendMessageClick}>
                            <button>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

