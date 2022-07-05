import {combineReducers, createStore} from 'redux';
import {profileReduser} from './profile-reduser';
// объединяем все редюсеры: в эту функцию передаем объект внутри
let reducers = combineReducers({
    // ветки - за ветки отвечают эти редюсеры
    profilePage: profileReduser,
    dialogsPage: profileReduser,
    sidebar: profileReduser,
})
// "закомбайненные" редюссеры отдаем в store, автоматически createStore создает внутри себя state с его свойствами:
let store = createStore(reducers)

export default store