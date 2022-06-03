import React from 'react';
import s from './Profile.module.css'
import {Profileinfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = (props) => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts state={props.state.posts}/>
        </div>
    );
};

