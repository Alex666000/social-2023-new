import React from 'react';
import styles from './Paginator.module.css'
type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (page: number) => void
}
export const Paginator = (props: UsersPropsType) => {
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
                         onClick={() => props.onPageChange(p)} // "сетаем" текущую страницу что придет через "колбек" в пропсах:
            >{p}</span>
        })}
    </div>}


