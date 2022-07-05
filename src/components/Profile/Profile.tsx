import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ActionsTypes, PostType, ProfilePageType} from '../../redux/store';

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

