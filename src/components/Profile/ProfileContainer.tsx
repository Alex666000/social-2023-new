import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {IProfile, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from '../../api/api';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: IProfile
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: IProfile) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        // Получаем userId:
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        profileAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data)
            }
        )
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)