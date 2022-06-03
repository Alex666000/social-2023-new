import React from 'react';
import s from './Profile.module.css'
import {Profileinfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';
import state from '../../redux/state';

export const Profile:React.FC = (props) => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts state={state.profilePage.posts}/>
        </div>
    );
};

