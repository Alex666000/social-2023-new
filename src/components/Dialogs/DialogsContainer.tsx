import React from 'react';
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
// types
export type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    updateNewMessageBody: (value: string) => void
    sendMessage: () => void
}
// общие пропсы для ПК Dialogs в нее они уйдут...:
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
// logic
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (value: string) => {
            dispatch(updateNewMessageBodyCreator(value))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())

        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

