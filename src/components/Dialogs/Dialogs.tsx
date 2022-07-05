import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {StoreType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';

type DialogsPropsType = {
    store: StoreType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const state = props.store.getState()

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }
    const sendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
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
                                value={state.dialogsPage.newMessageBody}
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

