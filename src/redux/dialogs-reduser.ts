import {ActionsTypes, DialogsPageType} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

// state тут = dialodPage
export const dialogsReduser = (state: DialogsPageType, action: ActionsTypes) => {
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