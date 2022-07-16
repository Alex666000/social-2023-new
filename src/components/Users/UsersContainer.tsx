import React from 'react';
import {connect} from 'react-redux';
import {Users} from './UsersC';
import {followAC, IUsers, setUsersAC, unFollowAC} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    users: Array<IUsers>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<IUsers>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        // передаст пропсы users в ПК - Users
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<IUsers>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

function dispatch(arg0: { readonly type: 'FOLLOW'; readonly userId: number; }) {
    throw new Error('Function not implemented.');
}

