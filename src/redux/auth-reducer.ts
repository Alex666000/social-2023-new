import {Dispatch} from "redux";
import {authAPI, securityAPI} from "api/api";
import {AppActionsTypes, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

// constants:
const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";


const initialState = {
    userId: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    isAuth: false,
    captchaUrl: null as (string | null) // if null, then captcha is not required
};
// reducer
export const authReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
// АС:
export const setAuthUserData = ({userId, email, login, isAuth}: DataAuthType) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
} as const);

export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
} as const);

// СК:-----------------------------------------------
// получить "авторизационные" данные:
// результат работы асинхронной функции вернется promise
// await дожидается выполнения promise когда он resolve()
export const getAuthUserData = (): AppThunk => async (dispatch) => {
    const response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        // если мы авторизованы устанавливаем эти "авторизационные" данные
        dispatch(setAuthUserData({userId: id, email, login, isAuth: true}));
    }
};
// логинимся
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: Dispatch<AppActionsTypes | any>) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        // success, get auth data
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl = () => async (dispatch: Dispatch<AppActionsTypes | any>) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

// вы-лог...
export const logout = (): AppThunk => async (dispatch: Dispatch<AppActionsTypes | any>) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        // let {id, login, email} = response.data.data
        // dispatch(setAuthUserData({id, email, login}))
        dispatch(setAuthUserData({userId: null, email: null, login: null, isAuth: true}));
    }
};
// types
export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

type initialStateType = typeof initialState

// response на запрос auth/me:
export type DataAuthType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export interface IAuthMeData {
    data: DataAuthType,
    "messages": string[],
    "fieldsErrors": string[],
    "resultCode": number
}
