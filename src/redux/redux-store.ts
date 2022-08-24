import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {ProfileActionsTypes, profileReducer} from './profile-reducer';
import {DialogsActionsTypes, dialogsReducer} from './dialogs-reduser';
import {sidebarReducer} from './sidebar-reduser';
import {UsersActionsTypes, usersReducer} from './users-reducer';
import {AuthActionsTypes, authReducer} from './auth-reducer';
import { reducer as formReducer } from 'redux-form'

// не RootReducers а в единственном числе - когда комбайним редюсеры на выходе получается один рутовый редюсер:
let rootReducer = combineReducers({
    // ветки = части "стейта" - за ветки отвечают эти редюсеры
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    // данное что достаем useSelector или mapStateToProps
    auth: authReducer,
    form: formReducer

})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

// общая типизация всех actions приложения для типизации "санок":
export type AppActionsType = UsersActionsTypes | ProfileActionsTypes | DialogsActionsTypes | AuthActionsTypes

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store

export default store