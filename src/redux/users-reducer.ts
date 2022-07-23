// constants:
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTALUSERS_COUNT'

// types:
export interface IUsers {
    name: string
    id: number
    photos: { small: boolean, large: boolean }
    status: boolean
    followed: boolean
}

export type ActionsUsersTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
// state:
export type initialStateType = {
    users: IUsers[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
// logic:
let initialState = {
    users: [] as IUsers[],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 5,
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsUsersTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]
            }
        case UNFOLLOW:
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]
            }
        case SET_USERS:
            return {...state, users: [...action.users,...state.users ]
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count
            }
        default:
            return state
    }
}
// АС:
export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
// установить полученных с сервера пользователей
export const setUsersAC = (users: Array<IUsers>) => ({type: SET_USERS, users} as const)
// установить текущую страничку
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
// установить общее кол-во пользователей
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const)


