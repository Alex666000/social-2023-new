// типизация state:
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
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
// state:
export let state: RootStateType = {
    //ветки profilePage и dialogsPage - отдельный под]объект для каждой страничке...
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likeCount: 12},
            {id: 2, message: 'How are you?', likeCount: 10}
        ],
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
    }
}

export default state;

