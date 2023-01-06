import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {IProfile} from '../../../api/api';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jpg';


type ProfileInfoPropsType = {
    profile: IProfile
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    isOwner: boolean

}
//ПК:
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
        savePhoto(e.target.files[0])
    }
    }

    return (<div>
            {/*<div>*/}
            {/*<img className={s.imgProfileInfo}*/}
            {/*src="https://img.championat.com/s/735x490/news/big/v/x/nejroset-imagen-ot-google-sozdayot-neveroyatnye-kartinki-vot-primery-eyo-rabot_1653415767422445164.jpg"*/}
            {/*alt="TS"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                {profile.photos?.large
                    &&
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>}
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>{profile.fullName}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.userId}</div>
            </div>
        </div>
    );
};

