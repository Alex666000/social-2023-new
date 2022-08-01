import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from 'react-router-dom';
import {IUser} from '../../redux/users-reducer';
import axios from 'axios';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (page: number) => void
    users: Array<IUser>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>
}
export const Users = (props: UsersPropsType) => {
    // пагинация:
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {/* пагинация: */}
            {pages.map(p => {
                // текущая страница:
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => props.onPageChange(p)} // "сетаем" текущую страницу что придет через "колбек" в пропсах:
                >{p}</span>
            })}
        </div>
        {
            props.users.map((u: IUser) => {
                return (<div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'profile/' + u.id}>
                               <img src={u.photos.small ? u.photos.small : u.photos.large ? u.photos.large : userPhoto}
                                    className={styles.userPhoto}/>
                            </NavLink>

                        </div>
                    </span>
                        <div>
                            {u.followed
                                // disabled - одной кнопки, а не всех...
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '08dcbd00-c9ba-492d-8511-2f92ca925785'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    });
                                }}>unFollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '08dcbd00-c9ba-492d-8511-2f92ca925785'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    });
                                }}>follow</button>}
                        </div>
                        <span>
                        <span><div>{u.name}</div><div>{u.status}</div></span>
                        <span>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </span>
                    </span>
                    </div>
                )
            })
        }
    </div>
};

