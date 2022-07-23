import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'
import styles from './user.module.css'
import {UsersPropsType} from './UsersContainer';

export class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        // вычисляем кол-во страниц на странице:
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
// создаем массив наших страниц чтобы ниже его отрисовать:
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    // @ts-ignore // текущая страница:
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     this.onPageChange(p)
                                 }} // "сетаем" текущую страницу что придет через "колбек" в пропсах:
                    >{p}</span>
                })}
            </div>
            {
                this.props.users.map((u: any) => {
                    return (<div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                    </span>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unFollow(u.id)
                                    }}>unFollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>follow</button>}
                            </div>
                            <span>
                        <span><div>{u.name}</div><div>{u.status}</div></span>
                        <span>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </span>
                    </span>
                        </div>
                    )
                })
            }
        </div>
    }
}
