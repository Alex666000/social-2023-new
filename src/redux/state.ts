import {MouseEvent} from 'react';
// constants:
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// types:
export type PostType = {
    id: number,
    message: string
    likeCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
// typing actions creators:
export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
// action creators:
export let addPostActionCreator = (newPostText: string) => ({type: ADD_POST, postText: newPostText}) as const
export let updateNewPostTextActionCreator = (value: string) => ({type: UPDATE_NEW_POST_TEXT, newText: value}) as const
// store typing:
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
// data store:
export let store: StoreType = {
    _state: {
        //ветки profilePage и dialogsPage - отдельный под]объект для каждой страничке...
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likeCount: 12},
                {id: 2, message: 'How are you?', likeCount: 10},
                {id: 3, message: 'Nike', likeCount: 10},
                {id: 4, message: 'Moscow', likeCount: 10}
            ],
            newPostText: 'Hello friend',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Margarita'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Victor'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What is your name'},
                {id: 4, message: 'My name is....'},
                {id: 5, message: 'Let\'s go'},
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type ===  ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    }

}









