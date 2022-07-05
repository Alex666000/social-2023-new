import React, {MouseEvent} from 'react';
import {ActionsTypes, PostType, StoreType} from '../../../redux/store';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reduser';
import {MyPosts} from './MyPosts';

type MyPostsPropsType = {
    store: StoreType
}

// present component:
export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostCreator())
    }
    const onPostChange = (value: string) => {
        // вся грязная работа:
        let action = updateNewPostTextCreator(value);
        props.store.dispatch(action)
    }

// удовлетворяем пропсами MyPosts - ПК - оборачиваем в обертку:
    return (<MyPosts
        newPostText={state.profilePage.newPostText}
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}/>)
}





