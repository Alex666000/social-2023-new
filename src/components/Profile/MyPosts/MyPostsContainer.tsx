import React, {ComponentType} from 'react';
import {AppRootStateType} from '../../../redux/redux-store';
import {addPostCreator, PostType} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {MyPosts} from './MyPosts';
// типизируем то что mapStateToProps возвращает (возвращает часть state которую достаем из reducer...)
type MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

//  в нём сидит state всего App:
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
)(MyPosts)





