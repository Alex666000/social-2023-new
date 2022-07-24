import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../assets/images/user.jpg';

export const Users = (props: any) => {
    // пагинация:
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
          {/* пагинация: */}
            {pages.map(p => {
                // @ts-ignore // текущая страница:
                return <span className={props.currentPage === p &&  styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }} // "сетаем" текущую страницу что придет через "колбек" в пропсах:
                >{p}</span>
            })}
        </div>
        {
            props.users.map((u: any) => {
                return (<div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : u.photos.large ?  u.photos.large : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                    </span>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>unFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
};

