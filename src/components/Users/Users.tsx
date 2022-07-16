import React from 'react';
import styles from './user.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'
import {UsersPropsType} from './UsersContainer';
import {IUsers} from '../../redux/users-reducer';
import any = jasmine.any;

// переписали User которая функциональная компонента на классовую UserC:
export class Users extends React.Component<any, any> {
    // делаем коструирование объекта:
    constructor(props: any) {
        super(props);
        // делаем запрос на сервак за пользователями - даж if е надо ставить делаем запрос 1 раз - при загрузке стр. так как конструктор вызывается 1 раз при загрузке страницы никак в функциональны К_ах - будем получать при загрузке пользователей и все будет хорошо - делаем в этом месте запрос на сервак просто:
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
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
