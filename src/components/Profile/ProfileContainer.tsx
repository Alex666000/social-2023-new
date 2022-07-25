import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {IProfile, setUserProfile} from '../../redux/profile-reducer';

type MapStateToPropsType = {
    profile: IProfile
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: IProfile) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

class ProfileContainer extends React.Component<ProfileContainerPropsType, any> {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
                this.props.setUserProfile(response.data)
            }
        )
    }
    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
};

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)