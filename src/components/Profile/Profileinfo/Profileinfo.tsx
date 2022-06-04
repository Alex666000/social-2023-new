import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo: React.FC = (props) => {
    return (
        <div>
            <div>
                <img className={s.imgProfoleInfo}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOTrZH4dN0uKM1hMP5b4ewjeyEERCzo7kA&usqp=CAU"
                     alt="TS"/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + descripshion
            </div>
        </div>
    );
};

