import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfilePageType} from '../../redux/state';

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    addPostCallback: (mess: string) => void
    updateNewPostText: (text: string) => void

}

export const Profile: React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPostCallback={props.addPostCallback}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

