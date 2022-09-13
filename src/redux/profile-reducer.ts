import {AppThunk} from './redux-store';
import {IProfile, profileAPI, usersAPI} from '../api/api';
// constants:
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

// logic:
let initialState = {
    posts: [
        {id: 1, message: 'Hello', likeCount: 12}, // post
        {id: 2, message: 'How are you?', likeCount: 10},
        {id: 3, message: 'Nike', likeCount: 10},
        {id: 4, message: 'Moscow', likeCount: 10}
    ],
    // изначально объект пустой инициализируем:
    profile: {} as IProfile,
    status: '',
} as ProfilePageType


export const profileReducer = (state: initialStateType = initialState, action: ProfileActionsTypes): initialStateType => {
    switch (action.type) {
        // добавить новый пост:
        case ADD_POST:
            let newPost = {id: new Date().getTime(), message: action.newPostText, likeCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        // когда статус придет с сервера - установим его:
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case 'DELETE_POST':
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state
    }
}

// actions
export let addPostCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export let setUserProfile = (profile: IProfile) => ({type: SET_USER_PROFILE, profile} as const)
export let setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export let deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)

// thunk
export let getUserProfile = (userId: number): AppThunk => async (dispatch) => {
   const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
// получение статуса с сервера - аякс запрос так как делаем санку:
export let getStatus = (userId: number): AppThunk => async (dispatch) => {
    const response = await  profileAPI.getStatus(userId)
    // когда получим статус с сервера - засетаем его в state  к себе...:
    dispatch(setStatus(response.data))
}
// thunk, которая шлет запрос, чтобы обновить статус:
// получение статуса с сервера - аякс запрос, так как делаем thunk:
export let updateStatus = (status: string): AppThunk => async(dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        // засетали статус себе - чтобы его потом на UI отобразить:
        dispatch(setStatus(status))
    }
}

// types:
export type PostType = {
    id: number,
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: IProfile
    status: string
}
// Actions types:
export type ProfileActionsTypes =
    | ReturnType<typeof addPostCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

type initialStateType = typeof initialState

