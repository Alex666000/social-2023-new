import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppActionsTypes, AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

// constants:
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

const initialState = {
    userId: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    isAuth: false,
    captchaUrl: null as (string | null) // if null, then captcha is not required
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
// результат работы асинхронной функции вернется promise
// await дожидается выполнения promise когда он resolve()
export const getAuthUserData = (): AppThunk => async (dispatch) => {
    const response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        // если мы авторизованы устанавливаем эти "авторизационные" данные
        dispatch(setAuthUserData({id, email, login, isAuth: true}))
    }
}
// логинимся
export const login = (email: null | string, password: null | string, rememberMe = false, captcha: string | null = null): AppThunk => async (dispatch) => {
const response =  await authAPI.me()
    if (response.data.resultCode === 0) {
        // let {id, login, email} = response.data.data
        // dispatch(setAuthUserData({id, email, login}))
        dispatch(getAuthUserData())
    } else {
        let message = response.data.length > 0 ? response.data.messages[0] : '\'Email or password is wrong\''
        let action: any = stopSubmit('login', {_error: message})
        dispatch(action)
    }
}
// вы-лог...
export const logout = (): AppThunk => async (dispatch: Dispatch<AppActionsTypes | any>) => {
    const response =  await authAPI.me()
    if (response.data.resultCode === 0) {
        // let {id, login, email} = response.data.data
        // dispatch(setAuthUserData({id, email, login}))
        dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: true}))
    }
}

// types
export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

type initialStateType = typeof initialState

// response на запрос auth/me:
export type DataAuthType = {
    id: number | null
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
