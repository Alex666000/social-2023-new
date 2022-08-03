import {AppActionsType} from './redux-store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
// все типы к своему reducer писать...
export type DialogType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type MessageType = {
    id: number
    message: string
}
// typeof - автоматически про-типизирует наш объект:
export type initialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Margarita'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Victor'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name'},
        {id: 4, message: 'My name is....'},
        {id: 5, message: 'Let\'s go'},
        // воспринимай этот массив как такой-то тип, примитивы через as не делаем
    ] as Array<MessageType>,
    newMessageBody: 'hello' as string
}
export type DialogsActionsTypes =
    ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>

// state тут = "dialodsPage"  а не весь state
export const dialogsReducer = (state: initialStateType = initialState, action: AppActionsType): initialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.text
            }
        case SEND_MESSAGE:
            let newMessage = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: new Date().getTime(), message: newMessage}]
            }
        default:
            return state
    }
}
// action creators:
export let updateNewMessageBodyCreator = (value: string) => ({type: UPDATE_NEW_MESSAGE_BODY, text: value} as const)
export let sendMessageCreator = () => ({type: SEND_MESSAGE}) as const