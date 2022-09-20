import React from 'react';
import styles from './Paginator.module.css'
type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    currentPage?: number
    portionSize?: number
}
export const Paginator: React.FC<PaginatorPropsType> = (props) => {
    // пагинация:
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {/* пагинация: */}
        {pages.map(p => {
            // текущая страница:
            return <span className={props.currentPage === p ? styles.selectedPage : ''}
                         onClick={() => props.onPageChanged(p)} // "сетаем" текущую страницу что придет через "колбек" в пропсах:
            >{p}</span>
        })}
    </div>}


