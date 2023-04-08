import React from 'react';
import styles from './Paginator.module.css'
type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
    currentPage?: number
    portionSize?: number
}
export const PaginatorOLD: React.FC<PaginatorPropsType> = (props) => {
    // пагинация:
    // делим общее количество пользователей на размер странице = сколько страниц у нас есть
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    // массив квадратиков-кнопок которые надо отобразить - заполняем let pages = []
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {/* пагинация: рисуем страничку - "спанчики" по которым кликаем = меняем страничку*/}
        {pages.map(p => {
            // текущая страница:
            return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''}
                         //
                         onClick={() => props.onPageChanged(p)} // "сетаем" текущую страницу что придет через "колбек" в пропсах:
            >{p}</span>
        })}
    </div>}


