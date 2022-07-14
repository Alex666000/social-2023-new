import React from 'react';
import styles from './user.module.css';
import {UsersPropsType} from './UsersContainer';

export const Users = (props: UsersPropsType) => {
    // если со старта users нет, {иначе ошибка - из-за "гавнокода" - загрязнили компоненту - побочный эффект - воо время своего вызова Users диспатчит пользователей - нарушает "имутабельность"} то:
    if (props.users.length === 0) {
        // перед отрисовкой засетаем users и отправим их в КК в :
        props.setUsers(  [{id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8OQU7nZgfHPGP6meOg1J53i3bnNotT4bhQ&usqp=CAU', followed: false, fullName: 'Dmitry', status: 'I am a student', location : {city: 'Moscow', country: 'Russia'} },
            {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cN7CEVP0x4IzUAYjFt0WXuCvh4qz4j0LNw&usqp=CAU', followed: true, fullName: 'Alex', status: 'I am a student too', location : {city: 'Minsk', country: 'Belarus'} },
            {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8OQU7nZgfHPGP6meOg1J53i3bnNotT4bhQ&usqp=CAU', followed: false, fullName: 'Makc', status: 'I am a student too', location : {city: 'Kiev', country: 'Ukraine'} } ] )
    }

    return (
        <div>
            {
                // придут users сюда т.к - в mapStateToProps мы вернули users а до этого добавили в наш store редаксовский ветку usersPage: usersReducer
                props.users.map(u => <div key={u.id}>
{/*                    отрисуем компоненту*/}
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                    </span>
                    <div>
                        {u.followed
                            // по клику на кнопку передаем данные в КК что мы хотим отписаться или подписаться так как сюда передали из КК callback:
                            ? <button onClick={() => {props.unFollow(u.id)} }>unFollow</button>
                            : <button onClick={() => {props.follow(u.id)} }>follow</button>}

                    </div>
                    <span>
                        <span><div>{u.fullName}</div><div>{u.status}</div></span>
                        <span>
                            <div>{u.location.country}</div><div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

