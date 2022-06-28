import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {ActionsTypes, DialogsPageType} from '../../redux/state';
import {text} from 'stream/consumers';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }
    const sendMessageClick = () => {
        props.dispatch(sendMessageCreator())
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
                                value={props.newMessageBody}
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

