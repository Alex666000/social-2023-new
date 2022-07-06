import React from 'react';
import {DialogsPageType, store, StoreType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';

type DialogsPropsType = {
    store: StoreType
}

// стейтовые данные
let mapStateToProps = (state: DialogsPageType) => {
    return {
        dialogsPage: store.getState().dialogsPage
    }
}
// берет колбеки которые отправим в ПК
let mapDispatchToProps = (dispatch: any) => {
    return {
        // в теле функции логика что они делали:
        updateNewMessageBody:(value: string) => {
            dispatch(updateNewMessageBodyCreator(value))
        },
        sendMessage:() => {
            dispatch(sendMessageCreator())

        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

