import {ActionsTypes} from './store';
// constants:
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number,
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likeCount: 12},
        {id: 2, message: 'How are you?', likeCount: 10},
        {id: 3, message: 'Nike', likeCount: 10},
        {id: 4, message: 'Moscow', likeCount: 10}
    ] as Array<PostType> ,
    newPostText: 'Hello friend',
}

export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}
// action creators:
export let addPostCreator = (newPostText: string) => ({type: ADD_POST, postText: newPostText} as const)
export let updateNewPostTextCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

