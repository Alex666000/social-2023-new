import React from 'react';
import {StoreType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    const dialogsPage = props.store.getState().dialogsPage

    const onNewMessageChange = (value: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(value))
    }
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    return <Dialogs
        dialogsPage={dialogsPage}
        sendMessage={onSendMessageClick}
        updateNewMessageBody={onNewMessageChange}
    />
};

