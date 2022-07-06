import React from 'react';
import {StoreType} from '../../../redux/store';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostCreator(state.profilePage.newPostText))
    }
    const onPostChange = (value: string) => {
        // вся грязная работа:
        let action = updateNewPostTextCreator(value);
        props.store.dispatch(updateNewPostTextCreator(value))
    }

    return <MyPosts
        newPostText={state.profilePage.newPostText}
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}/>
}





