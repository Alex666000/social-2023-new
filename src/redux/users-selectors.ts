import {AppRootStateType} from './redux-store';
import {IUser} from './users-reducer';
import {createSelector} from 'reselect';
// Селектор: выбирает, забирает или вытягивает данные
// если users не изменились, то не будем перерисовывать целевую компоненту и не будем вызывать даже селектор - если селектор вызовется, то всегда образуется новый объект! filter, map - тоже создает новый объект,
// МЫ ХОТЕЛИ БЫ ВЫЗЫВАТЬ НАШУФУНКЦИЮ СТОЛЬКО РАЗ СКОЛЬКО ОНА БУДЕТ ВЫЗЫВАТЬСЯ, НО ЧТОБЫ ФУНКЦИЯ НЕ ПЕРЕЗАПУСКАЛАСЬ ЕСЛИ В ЭТОМ НЕТ СМЫСЛА - Библиотека Reselect...
// ---------------------------------------------------------------------------------
// примитивный селектор
export const getUsersSelector = (state: AppRootStateType): IUser[] => {
    return state.usersPage.users
}
// внутри реселекта записана сложная логика по сохранению значения по оценки не изменились ли входные данные...
// более сложный селектор использует более примитивный, чтобы получить, то что нужно более сложному селектору
// результат работы примитивного селектора: users - засовывает в свою колбек-функцию
// если state меняется, но не будет меняться в state_е: users, то функция-колбек не будет перезапускаться
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true);
    })

export const getPageSize = (state: AppRootStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppRootStateType): number => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppRootStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppRootStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppRootStateType): number[] => {
    return state.usersPage.followingInProgress
}
// ------------------ селекторы могут быть сложные: пересчитывают что-то тяжелое: ----------------------
const countSomethingDifficult = (state: AppRootStateType) => {
    //for... math... big arrays
    //  считали, считали... а вернули примитивное значение, так как MapStateToProps срабатывает очень часто, у нас будет срабатывать запуск селекторов очень часто - и если селектор сложный, тогда - проседание производительности. Мы должны попадать в сложный селектор только когда нужно:
    //  Проблемы: 1. Неудобно дебажить 2. Часто пересчитывать,лишняя перекалькуляция 3. Лишние ререндеры
    // Библиотека Reselect исправляет эти проблемы
    let count = 23;
    return count;
}