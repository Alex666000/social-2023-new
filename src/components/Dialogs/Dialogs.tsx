import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget?.value)
    }
    const sendMessageClick = () => {
        props.sendMessage()
    }
    // делаем редирект по условию на страницу логин как в Арр компоненте путь указан:
    if(!props.isAuth) return <Redirect to={'login'}/>

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
                            <button>Send_message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

