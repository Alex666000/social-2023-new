import React from 'react';
import s from './../Dialogs.module.css'
import state from '../../../redux/state';

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {

    let refTextarea = React.createRef()

    let addMessage = () => {
        let message = refTextarea.current.value
    }

    return (
        <div className={s.message}>{state.dialogsPage.messages}
            <textarea ref={refTextarea}> </textarea>
            <button onClick={addMessage}>x</button>
        </div>

    )
};


