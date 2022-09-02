// constants:
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';
import {AppActionsTypes, AppThunk} from './redux-store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

// logic:
let initialState = {
    users: [] as IUser[],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 5,
    isFetching: true,
    // followingInProgress: false,
    followingInProgress: [] as Array<number>,
}


export const usersReducer = (state: initialStateType = initialState, action: UsersActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users, ...state.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
// АС:
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
// установить полученных с сервера пользователей:
export const setUsers = (users: Array<IUser>) => ({type: SET_USERS, users} as const)
// установить текущую страничку:
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
// установить общее кол-во пользователей:
export const setUsersTotalCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
} as const)
// preloader:
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
// подписаться и отписаться:
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

// CK:

// получить пользователей:
export const getUsers = (currentPage: number, pageSize: number): AppThunk => {
    // типизация санки когда диспатчим action а не санку
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            // когда приходит ответ с сервера скрываем preloader:
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}
// подписаться:
export const follow = (userId: number): AppThunk => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    });
}
// отписаться:
export const unFollow = (userId: number): AppThunk => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unFollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unFollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    });
}

// types
// response type - 1 user:
export interface IUser { // user
    name: string
    id: number
    photos: { small: string, large: string }
    status: boolean
    followed: boolean
}

export type UsersActionsTypes =
    | ReturnType<typeof setUsers> | ReturnType<typeof followSuccess> | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
export type initialStateType = typeof initialState



