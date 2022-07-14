import {ActionsTypes} from './store';
// constants:
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
// types:
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location : {city: string, country: string}
}
export type initialStateType = typeof initialState
// logic:
let initialState = {
    // спроектировали в бизнес отображение users:
    users: [ ] as Array<UserType>,
        /*{id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8OQU7nZgfHPGP6meOg1J53i3bnNotT4bhQ&usqp=CAU', followed: false, fullName: 'Dmitry', status: 'I am a student', location : {city: 'Moscow', country: 'Russia'} }, // user 1
        {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cN7CEVP0x4IzUAYjFt0WXuCvh4qz4j0LNw&usqp=CAU', followed: true, fullName: 'Alex', status: 'I am a student too', location : {city: 'Minsk', country: 'Belarus'} }, // user 2
        {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8OQU7nZgfHPGP6meOg1J53i3bnNotT4bhQ&usqp=CAU', followed: false, fullName: 'Makc', status: 'I am a student too', location : {city: 'Kiev', country: 'Ukraine'} }, // user 3*/
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]
            }
        case SET_USERS:
            return {
                ...state,
                // к пустому массиву users - прибавили то, что пришло с сервера:
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
// АС:
// чтобы подписать или отписать кого-то, нам нужно знать id - UI, он придет к нам в АС, как параметр
export const followAC = (userId: number)  => ({type: FOLLOW, userId } as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<any>) => ({type: SET_USERS, users} as const)


