import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {ProfileActionsTypes, profileReducer} from './profile-reducer';
import {DialogsActionsTypes, dialogsReducer} from './dialogs-reduser';
import {UsersActionsTypes, usersReducer} from './users-reducer';
import {AuthActionsTypes, authReducer} from './auth-reducer';
import {reducer as formReducer} from 'redux-form'
import {appReducer, InitializedSuccsesType} from './app-reducer';

// не RootReducers а в единственном числе - когда комбайним редюсеры на выходе получается один рутовый редюсер:
let rootReducer = combineReducers({
    // ветки = части "стейта" - за ветки отвечают эти редюсеры
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    // данное что достаем useSelector или mapStateToProps
    auth: authReducer,
    form: formReducer,
    app: appReducer,

})
// типизация state всего Арр
export type AppRootStateType = ReturnType<typeof rootReducer>
// типизация санок
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsTypes>

// общая типизация всех actions приложения для типизации "санок"всего Арр:
export type AppActionsTypes =
    UsersActionsTypes
    | ProfileActionsTypes
    | DialogsActionsTypes
    | AuthActionsTypes
    | InitializedSuccsesType

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store

export default store
