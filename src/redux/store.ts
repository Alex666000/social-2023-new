// types:
import {dialogsReducer} from './dialogs-reduser';

type PostType = {
    id: number,
    message: string
    likeCount: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
type SiarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    siar: SiarType
}
// store typing:
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (val: RootStateType) => void
    subscribe: (callback: () => void) => void
    dispatch: (action: any) => void
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
            newPostText: 'Top gun',
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
            newMessageBody: 'friends'
        },
        siar: {}
    },
    getState() {
        return store._state
    },
    _callSubscriber(observer) {
        // console.log('State changed')
    },
    subscribe(observer) {
        store._callSubscriber = observer
    },
    dispatch(action) {
        // const profilePage = profileReducer(store._state.profilePage, action)
        const dialogsPage = dialogsReducer(store._state.dialogsPage, action)
        store._callSubscriber(store._state)
    }
}









