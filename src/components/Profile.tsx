import React from 'react';
import './Profile.css'

const Profile: React.FC = () => {
    return (
        <div className={'content'}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOTrZH4dN0uKM1hMP5b4ewjeyEERCzo7kA&usqp=CAU" alt="TS"/>
            </div>
            <div>
                avatar + descripshion
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div  className={'posts'}>
                    <div className={'item'}>
                        post 1
                    </div>
                    <div className={'item'}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;