import React from 'react';
import s from './ProfileInfo.module.css'
import {IProfile} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';

type ProfilePropsType = {
    profile: IProfile
}
//ПК:
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
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.userId}</div>
            </div>
        </div>
    );
};

