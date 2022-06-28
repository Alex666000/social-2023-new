// types:
import {addPostCreator, profileReduser, updateNewPostTextCreator} from './profile-reduser';
import {dialogsReduser, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reduser';
import {sidebarReduser} from './sidebar-reduser';

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
        const profilePage = profileReduser(store._state.profilePage, action)
        const dialogsPage = dialogsReduser(store._state.dialogsPage, action)
        const sidebarPage = sidebarReduser(store._state.dialogsPage, action)
        store._callSubscriber(store._state)
    }
}









