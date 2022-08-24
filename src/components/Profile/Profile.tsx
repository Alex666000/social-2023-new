import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {IProfile} from '../../api/api';

type ProfilePropsType = {
    profile: IProfile
    status: string
    updateStatus:(status: string) => void

}
export const Profile = (props: ProfilePropsType ) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};


