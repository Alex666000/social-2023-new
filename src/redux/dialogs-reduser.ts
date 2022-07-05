import {ActionsTypes, DialogsPageType} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

// state тут = dialodPage
export const dialogsReduser = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            // newMessageBody - будет равно action пришедшему из UI:
            state.newMessageBody = action.text
            return state
        }
        case SEND_MESSAGE: {
            let newMessage = state.newMessageBody
            state.messages.push({id: new Date().getTime(), message: newMessage})
            state.newMessageBody = '';
            return state
        }
        default:
            return state
    }
}
// action creators:
export let updateNewMessageBodyCreator = (value: string) => ({type: UPDATE_NEW_MESSAGE_BODY, text: value} as const)
export let sendMessageCreator = () => ({type: SEND_MESSAGE}) as const