import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from 'react-router-dom';
import {IUser} from '../../redux/users-reducer';

type UsersPropsType = {
    user: IUser
    followingInProgress: Array<any>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export const User: React.FC<UsersPropsType> = ({user, followingInProgress, follow, unFollow}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'profile/' + user.id}>
                        <img alt={'photo'}
                            src={user.photos.small ? user.photos.small : user.photos.large ? user.photos.large : userPhoto}
                            className={styles.userPhoto}/>
                    </NavLink>

                </div>
                    </span>
            <div>
                {user.followed
                    // disabled - одной кнопки, а не всех...
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unFollow(user.id)

                    }}>unFollow</button>
                    : <button
                        disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>follow</button>}
            </div>
            <span>
                        <span><div>{user.name}</div><div>{user.status}</div></span>
                        <span>
                            <div>
                                {'user.location.country'}
                            </div>
                            <div>
                                {'user.location.city'}
                            </div>
                        </span>
                    </span>
        </div>)

};

