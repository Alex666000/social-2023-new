import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppActionsTypes, AppThunk} from './redux-store';

// constants:
const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    id: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    isAuth: false,
    // captchaUrl: null as (string | null) // if null, then captcha is not required
};
// reducer
export const authReducer = (state: initialStateType = initialState, action: AuthActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
// АС:
export const setAuthUserData = ({id, email, login, isAuth}: DataAuthType) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)

// СК:-----------------------------------------------
// получить "авторизационные" данные:
export const getAuthUserData = (): AppThunk => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData({id, email, login, isAuth: true}))
            }
        })
}
// export const getAuthUserData1 = (): AppThunk => async (dispatch) => {
//     const res = await authAPI.me()
//     dispatch(setAuthUserData({id, email, login, isAuth: true}))
// }

// логинимся
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                // let {id, login, email} = response.data.data
                // dispatch(setAuthUserData({id, email, login}))
                dispatch(getAuthUserData())
            }
        })
}
// вы-лог...
export const logout = (email: string | null, password: string | null, rememberMe: boolean): AppThunk => (dispatch: Dispatch<AppActionsTypes | any>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                // let {id, login, email} = response.data.data
                // dispatch(setAuthUserData({id, email, login}))
                dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: true}))
            }
        })
}

// types
export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

type initialStateType = typeof initialState

// response на запрос auth/me:
export type DataAuthType = {
    id: number| null
    login: string | null
    email: string | null
    isAuth: boolean
}
export interface IAuthMeData {
    data: DataAuthType,
    'messages': string[],
    'fieldsErrors': string[],
    'resultCode': number
}
