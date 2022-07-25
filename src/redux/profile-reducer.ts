// constants:
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
// types:
export type PostType = {
    id: number,
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: IProfile
}
// response type:
export interface IPhotosType {small: string, large: string }
export interface IContactsType {
    facebook: string
    website: boolean
    vk: string
    twitter: string
    instagram: string
    youtube: boolean
    github: string
    mainLink: boolean
}
export interface IProfile {
    aboutMe: string
    contacts:IContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: IPhotosType
}

// Actions types:
export type ActionsProfileTypes =
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof setUserProfile>
// logic:
let initialState = {
    posts: [
        {id: 1, message: 'Hello', likeCount: 12}, // post
        {id: 2, message: 'How are you?', likeCount: 10},
        {id: 3, message: 'Nike', likeCount: 10},
        {id: 4, message: 'Moscow', likeCount: 10}
    ],
    newPostText: 'Hello friend',
    // изначально объект пустой инициализируем:
    profile: {} as IProfile,
} as ProfilePageType
// initialStateType:
export type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionsProfileTypes): initialStateType => {
    switch (action.type) {
        // добавить новый пост:
        case ADD_POST:
            let newPost = {id: new Date().getTime(), message: state.newPostText, likeCount: 0} // новый пост = message: state.newPostText
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        // обновить текст поста:
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
// action creators:
export let addPostCreator = (newPostText: string) => ({type: ADD_POST, postText: newPostText} as const)
export let updateNewPostTextCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
// установить профиль пользователя полученного с сервера:
export let setUserProfile = (profile: IProfile) => ({type: SET_USER_PROFILE, profile} as const)

