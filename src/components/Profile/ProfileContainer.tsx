import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {IProfile, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: number | undefined
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
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
                this.props.setUserProfile(response.data)
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