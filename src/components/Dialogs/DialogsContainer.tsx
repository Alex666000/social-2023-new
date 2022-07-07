import React from 'react';
import {DialogsPageType, store, StoreType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state: DialogsPageType) => {
    return {
        dialogsPage: store.getState().dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody:(value: string) => {
            dispatch(updateNewMessageBodyCreator(value))
        },
        sendMessage:() => {
            dispatch(sendMessageCreator())

        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

