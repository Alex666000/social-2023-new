import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
// объединяем все редюсеры: в эту функцию передаем объект внутри
let reducers = combineReducers({
    // ветки - за ветки отвечают эти редюсеры
    profilePage: profileReducer,
    dialogsPage: profileReducer,
    sidebar: profileReducer,
})
// "закомбайненные" редюссеры отдаем в store, автоматически createStore создает внутри себя state с его свойствами:
let store = createStore(reducers)

export default store