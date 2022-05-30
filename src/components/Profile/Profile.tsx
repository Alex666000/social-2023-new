import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {Profileinfo} from './Profileinfo/Profileinfo';

export const Profile: React.FC = (props) => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts/>
        </div>
    );
};

