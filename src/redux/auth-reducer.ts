// constants:
const SET_USER_DATA = 'SET_USER_DATA'
// response auth/me:
export type DataAuthType = {
    id: number
    login: string
    email: string
   }
export interface IAuthMeData {
    data: DataAuthType,
    "messages": string[],
    "fieldsErrors": string[],
    "resultCode": number
}

export type ActionsUsersTypes = ReturnType<typeof setAuthUserData>

export type initialStateType = typeof initialState

const initialState = {
    id: 24936,
    login: "slim666",
    email: "bogdanov777000@mail.ru",
    isAuth: true
}

export const authReducer = (state: initialStateType = initialState, action: ActionsUsersTypes): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}
// АС:
export const setAuthUserData = ({id,email, login}: DataAuthType) => ({type: SET_USER_DATA, data: {id,email,login}} as const)



