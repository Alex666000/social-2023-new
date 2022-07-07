import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../redux/store';


export const Profile: React.FC<any> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

