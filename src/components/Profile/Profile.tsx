import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile: React.FC = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOTrZH4dN0uKM1hMP5b4ewjeyEERCzo7kA&usqp=CAU"
                    alt="TS"/>
            </div>
            <div>
                avatar + descripshion
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;