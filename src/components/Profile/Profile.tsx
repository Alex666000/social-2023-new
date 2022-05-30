import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {Profileinfo} from './Profileinfo/Profileinfo';

const Profile: React.FC = () => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts hey={'yo'}/>
        </div>
    );
};

export default Profile;