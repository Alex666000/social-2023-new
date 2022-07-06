import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {ActionsTypes, ProfilePageType, StoreType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePagePropsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
            />
        </div>
    );
};

