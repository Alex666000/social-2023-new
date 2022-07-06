import React from 'react';
import {StoreType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

type DialogsPropsType = {

}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState().dialogsPage

                const onNewMessageChange = (value: string) => {
                    store.dispatch(updateNewMessageBodyCreator(value))
                }
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                return <Dialogs
                    dialogsPage={state}
                    sendMessage={onSendMessageClick}
                    updateNewMessageBody={onNewMessageChange}/>
            }

        }
    </StoreContext.Consumer>

};

