import React from 'react';
import store from '../../../redux/redux-store';
import {addPostCreator, PostType, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
// типизируем то что mapStateToProps возвращает (возвращает часть state которую достаем из reducer...)
type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string

}

type MapDispatchToPropsType = {
    updateNewPostText: (value: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

// сидит state всего App:
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (value: string) => {
            dispatch(updateNewPostTextCreator(value))
        },
        addPost: () => {
            dispatch(addPostCreator(store.getState().profilePage.newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)





