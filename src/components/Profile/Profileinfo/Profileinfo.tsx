import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {IProfile} from '../../../api/api';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

type ProfilePropsType = {
    profile: IProfile
    status: string
    updateStatus:(status: string) => void
}
//ПК:
export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
            {/*<div>*/}
            {/*<img className={s.imgProfileInfo}*/}
            {/*src="https://img.championat.com/s/735x490/news/big/v/x/nejroset-imagen-ot-google-sozdayot-neveroyatnye-kartinki-vot-primery-eyo-rabot_1653415767422445164.jpg"*/}
            {/*alt="TS"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                {props.profile.photos?.large && <img src={props.profile.photos.large}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.userId}</div>
            </div>
        </div>
    );
};

