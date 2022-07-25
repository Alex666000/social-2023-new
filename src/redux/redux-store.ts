import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reduser';
import {sidebarReducer} from './sidebar-reduser';
import {usersReducer} from './users-reducer';

let rootReducer = combineReducers({
    // ветки = части "стейта" - за ветки отвечают эти редюсеры
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

// @ts-ignore
window.store = store

export default store