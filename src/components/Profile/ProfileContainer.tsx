import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getUserProfile, IProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: IProfile
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        // Получаем userId:
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.profile.userId
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})
// берем параметры Url:
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent))