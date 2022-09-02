import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {follow, getUsers, IUser, unFollow} from '../../redux/users-reducer';
import {AppRootStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

// КК - обертка:
class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        </>
    }
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        // передаст пропсы users в ПК - Users
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unFollow,
        getUsers,
    })
)(UsersContainer)

// types
type MapStateToPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<IUser>
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


