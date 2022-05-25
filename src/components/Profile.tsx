import React from 'react';
import s from './Profile.module.css'

const Profile: React.FC = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOTrZH4dN0uKM1hMP5b4ewjeyEERCzo7kA&usqp=CAU" alt="TS"/>
            </div>
            <div>
                avatar + descripshion
            </div>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div  className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;