import {ActionsTypes} from './store';
// constants:
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
// types:
export interface IUsers {
    name: string
    id: number
    photos: { small: boolean, large: boolean }
    status: boolean
    followed: boolean
}

export type initialStateType = {
    users: IUsers[]
}
// logic
export let initialState = {
    users: [] as IUsers[]
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
export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<IUsers>) => ({type: SET_USERS, users} as const)


