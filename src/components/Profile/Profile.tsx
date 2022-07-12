import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';


export const Profile: React.FC = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

