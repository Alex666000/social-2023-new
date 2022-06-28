import {ActionsTypes, PostType, ProfilePageType} from './state';
// constants:
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

// reduser // state тут = profilePage:
export const profileReduser = (state: ProfilePageType, action: ActionsTypes) => {
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

