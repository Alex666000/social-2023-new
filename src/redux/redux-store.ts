import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reduser';
import {sidebarReducer} from './sidebar-reduser';
// объединяем все редюсеры: в эту функцию передаем объект внутри
let rootReducer = combineReducers({
    // ветки - за ветки отвечают эти редюсеры
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})
// типизируем state всего приложения : typeof автоматически типизирует rootReducer, а ReturnType возьмет возвращаемый тип из того что автоматически про-типизируется из объекта:
export type AppStateType = ReturnType<typeof rootReducer>

// "закомбайненные" редюссеры отдаем в store, автоматически createStore создает внутри себя state с его свойствами:
let store = createStore(rootReducer)


export default store