import React, {ComponentType} from 'react';
import {DialogsPageType, sendMessageCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

// logic
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string | null) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


// types
export type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

export type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string | null) => void
}

// общие пропсы для ПК Dialogs в нее они уйдут...:
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

