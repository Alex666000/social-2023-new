import React from 'react';
import s from './Profile.module.css'
import {Profileinfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile: React.FC = (props) => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts/>
        </div>
    );
};

