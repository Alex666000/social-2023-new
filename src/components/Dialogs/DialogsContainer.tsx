import React, {ComponentType} from 'react';
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
// types
export type MapStateToPropsType = {
    dialogsPage: DialogsPageType
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

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
)(Dialogs)

