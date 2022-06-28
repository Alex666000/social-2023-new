import React from 'react';
import s from './../Dialogs.module.css'

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {

    let refTextarea: any = React.createRef()

    let addMessage = () => {
        let message = refTextarea.current.value
    }

    return (
        <div className={s.message}>
            <span>{props.message}</span>
        </div>

    )
};


