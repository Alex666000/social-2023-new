import React from 'react';
import {IProfile} from '../../api/api';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "components/Profile/Profileinfo/Profileinfo";

type ProfilePropsType = {
    profile: IProfile
    status: string
    updateStatus:(status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: IProfile) => Promise<any>

}
export const Profile = (props: ProfilePropsType ) => {
    return (
        <div>
            <ProfileInfo
                saveProfile={props.saveProfile}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};


