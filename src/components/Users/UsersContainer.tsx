import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    IUser,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unFollow
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';

type MapStateToPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<IUser>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<IUser>) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType

// КК - обертка:
class UsersContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        // Получаем userId:
        // let userId = this.props.match.params.userId
        // запрос на сервер пошел - покажи preloader:
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            // когда приходит ответ с сервера скрываем preloader:
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        // когда меняем страничку:
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
        }).then(response => {
            // когда приходит ответ с сервера скрываем preloader:
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        </>
    }
}
// супер - функции connect:
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        // передаст пропсы users в ПК - Users
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
})(UsersContainer)



