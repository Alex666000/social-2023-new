import React, {useEffect} from 'react';
import styles from './Profile.module.css';
// import {FormDataType, ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
// import {ProfileType} from "../../../redux/profilePage-reducer";
import {MyProfileWithHooks} from "../ProfileInfo/MyProfileWithHooks";
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../../common/hooks/useAppSelector';
import {selectedIsAuth} from '../../../redux/auth-selectors';

type ProfilePropsType = {
    // profile: null | ProfileType
    // status: string
    // isOwner: boolean
    // updateUserStatus: (userId: string, status: string) => void
    // updatePhoto: (photoFile: any) => void
    // updateUserProfile: (profile: FormDataType) => Promise<any> // ???
}

export const Profile = (/*props: ProfilePropsType*/) => {

    const navigate = useNavigate()
    const isAuth = useAppSelector(selectedIsAuth)

    useEffect(() => {
        if (!isAuth) navigate('/login');
    }, [isAuth])

    return (
        <div className={styles.right__profile}>
            {/*<ProfileInfo
                profile={props.profile}
                status={props.status}
                isOwner={props.isOwner}
                updateUserStatus={props.updateUserStatus}
                updatePhoto={props.updatePhoto}
                updateUserProfile={props.updateUserProfile}
            />*/}
            <MyProfileWithHooks/>
            <MyPostsContainer/>
        </div>
    );
}