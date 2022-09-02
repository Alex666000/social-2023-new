import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {IProfile} from '../../api/api';

class ProfileContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        // Получаем userId:
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// types
type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: IProfile
    status: string
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus:(userId: number) => void
    updateStatus:(status: string) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
