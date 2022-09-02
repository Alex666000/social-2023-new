const SEND_MESSAGE = 'SEND_MESSAGE'

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
}

// state тут = "dialodsPage" - а не весь state
export const dialogsReducer = (state: initialStateType = initialState, action: DialogsActionsTypes): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: new Date().getTime(), message: action.newMessageBody}]
            }
        default:
            return state
    }
}
// АС:
export let sendMessageCreator = (newMessageBody: string | null) => ({type: SEND_MESSAGE, newMessageBody}) as const

// types
// все типы к своему reducer писать...
export type DialogType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type MessageType = {
    id: number
    message: string | null
}
// typeof - автоматически про-типизирует наш объект:
export type initialStateType = typeof initialState
export type DialogsActionsTypes =
    | ReturnType<typeof sendMessageCreator>