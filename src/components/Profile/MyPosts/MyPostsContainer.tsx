import React from 'react';
import {ProfilePageType, store, StoreType} from '../../../redux/store';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state: ProfilePageType) => {
    return {
        newPostText: state.newPostText,
        posts: state.posts
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (value: string) => {
            dispatch(updateNewPostTextCreator(value))
        },
        addPost: () => {
            dispatch(addPostCreator(store.getState().profilePage.newPostText))
        }
    }
}
export const MyPostsContainer = connect()(MyPosts)





