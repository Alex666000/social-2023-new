import {AppThunk} from './redux-store';
import {getAuthUserData} from './auth-reducer';

// constants:
const SET_INITIALIZED_SUCCSESS = 'SSET_INITIALIZED_SUCCSESS'

//initialState
const initialState = {
    initialized: false,
    // диспатчим санку доработать 40 min
    globalError: null
};
// reducer
export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED_SUCCSESS':
            return {...state, initialized: true}
        default:
            return state
    }
}

// АС:
export const initializedSuccsess = () => ({type: 'SET_INITIALIZED_SUCCSESS'}) as const

// СК:
// проинициализирую Арр всё
export const initializeApp = (): AppThunk => (dispatch) => {
    // диспатчим получение авторизационных данных и когда они получаться диспатчим initializedSuccsess
    let promise = dispatch(getAuthUserData())
    // dispatch(чего-то)......
    // dispatch(чего-то)......
    // .then говорим у all_а - когда все promises из массива станут resolve
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccsess() )
            // теперь initialized: false изменится на try и наш Арр компонент получит try - для этого делаем ему mapStateToProps
        })
}

// type
type initialStateType = typeof initialState

export type InitializedSuccsesType =  ReturnType<typeof initializedSuccsess>
type ActionsTypes =
    | InitializedSuccsesType
