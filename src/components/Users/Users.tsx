import React from 'react';
import styles from './user.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

export class Users extends React.Component<any, any> {
    componentDidMount() {
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
