import React from 'react';
import s from './ProfileInfo.module.css'
import {IProfile} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';

type ProfilePropsType = {
    profile: IProfile
}

export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
            <div>
                <img className={s.imgProfileInfo}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOTrZH4dN0uKM1hMP5b4ewjeyEERCzo7kA&usqp=CAU"
                     alt="TS"/>
            </div>
            <div className={s.descriptionBlock}>
                {props.profile.photos?.large && <img src={props.profile.photos.large}/>}
                avatar + descripshion
            </div>
        </div>
    );
};

