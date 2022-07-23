// constants:
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// types:
export type PostType = {
    id: number,
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type ActionsProfileTypes = ReturnType<typeof addPostCreator> | ReturnType<typeof updateNewPostTextCreator>

export type initialStateType = typeof initialState


let initialState = {
    posts: [
        {id: 1, message: 'Hello', likeCount: 12}, // post
        {id: 2, message: 'How are you?', likeCount: 10},
        {id: 3, message: 'Nike', likeCount: 10},
        {id: 4, message: 'Moscow', likeCount: 10}
    ],
    newPostText: 'Hello friend',
} as ProfilePageType

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
        default:
            return state
    }
}
// action creators:
export let addPostCreator = (newPostText: string) => ({type: ADD_POST, postText: newPostText} as const)
export let updateNewPostTextCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

