import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {IProfile} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: IProfile
}
export const Profile = (props: ProfilePropsType ) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};


