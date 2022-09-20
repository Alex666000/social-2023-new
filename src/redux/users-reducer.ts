import {usersAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {Dispatch} from 'redux';
import {AxiosResponse} from 'axios';
import {updateObjectInArray} from '../utils/helpers/odject-helpers';
// constants:
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
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    // followingInProgress: false,
    followingInProgress: [] as Array<number>,
}
// reducer
export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})};
        // users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
        case UNFOLLOW:
            return {...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})};
        // users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
        case SET_USERS:
            return {...state, users: action.users}
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
// actions
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

// thunk:
// получить пользователей:
export const requestUsers = (page: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    // теперь подсвечивается жирным текущая страница
    dispatch(setCurrentPage(page))
    const response = await usersAPI.getUsers(page, pageSize)
    // когда приходит ответ с сервера скрываем preloader:
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setUsersTotalCount(response.data.totalCount))
}
// функция обертка для follow и unFollow
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => Promise<AxiosResponse<any, IUser>>, actionCreator: (userId: number) => UsersActionsTypes) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
// подписаться:
export const follow = (userId: number): AppThunk => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
// отписаться:
export const unFollow = (userId: number): AppThunk => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)

}

// types

/*   response type - 1 user:   */
export interface IUser { // user
    name: string
    id: number
    photos: { small: string, large: string }
    status: boolean
    followed: boolean
}

export type InitialStateType = typeof initialState

export type UsersActionsTypes =
    | ReturnType<typeof setUsers>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>



