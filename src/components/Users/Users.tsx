import React from 'react';
import {IUser} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: Array<IUser>
    followingInProgress: Array<any>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export const Users = ({totalUsersCount, pageSize, currentPage, onPageChange,users, ...props}: UsersPropsType) => {
    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChange}/>
        {
            users.map((u: IUser) => <User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unFollow={props.unFollow}
                follow={props.follow}

            />            )
        }
    </div>
};

