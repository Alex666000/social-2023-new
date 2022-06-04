import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile:React.FC = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage}/>
        </div>
    );
};

