import {MouseEvent} from 'react';
import {text} from 'stream/consumers';
// constants:
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
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
    newMessageBody: string
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
// typing actions creators:
export type ActionsTypes = ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof sendMessageCreator>
// action creators:
export let addPostCreator = (newPostText: string) => ({type: ADD_POST, postText: newPostText}) as const
export let updateNewPostTextCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const
export let updateNewMessageBodyCreator = (value: string) => ({type: UPDATE_NEW_MESSAGE_BODY, text: value} as const)

export let sendMessageCreator = () => ({type: SEND_MESSAGE}) as const
// store typing:
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (val: RootStateType) => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
// data store:


export const store: StoreType = {
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
            ],
            newMessageBody: 'hello'
        },
        sidebar: {}
    },
    getState() {
        return store._state
    },
    _callSubscriber(observer) {
        console.log('State changed')
    },
    subscribe(observer) {
        store._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 0
            }
            store._state.profilePage.posts.push(newPost)
            store._state.profilePage.newPostText = ''
            store._callSubscriber(store._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            store._state.profilePage.newPostText = action.newText
            store._callSubscriber(store._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            // newMessageBody - будет равно action пришедшему из UI:
            store._state.dialogsPage.newMessageBody = action.text
            store._callSubscriber(store._state)
        } else if (action.type === SEND_MESSAGE ) {
            let newMessage = store._state.dialogsPage.newMessageBody
            store._state.dialogsPage.messages.push({id: new Date().getTime(), message: newMessage})
            store._state.dialogsPage.newMessageBody = '';
            store._callSubscriber(store._state)
        }
    }
}









