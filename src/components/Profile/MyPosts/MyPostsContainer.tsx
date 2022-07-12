import React from 'react';
import {store} from '../../../redux/store';
import {addPostCreator, PostType, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
// типизируем то что mapStateToProps возвращает (возвращает часть стейта которую достаем из редюсера)
type MapStateToPropsType = {
    newPostText: string
    posts: Array<PostType>
}

type MapDispatchToPropsType = {
    updateNewPostText: (value: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

// сидит state всего App:
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch ): MapDispatchToPropsType => {
    return {
        updateNewPostText: (value: string): any => {
            dispatch(updateNewPostTextCreator(value))
        },
        addPost: () => {
            dispatch(addPostCreator(store.getState().profilePage.newPostText))
        }
    }
}
export const MyPostsContainer = connect()(MyPosts)





