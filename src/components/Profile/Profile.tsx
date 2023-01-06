import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {IProfile} from '../../api/api';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    profile: IProfile
    status: string
    updateStatus:(status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void

}
export const Profile = (props: ProfilePropsType ) => {
    return (
        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};


