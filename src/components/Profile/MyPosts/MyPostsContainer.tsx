import React from 'react';
import {DialogsPageType, store, StoreType} from '../../../redux/store';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/dialogs-reduser';

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    return <StoreContext.Consumer>
        {
        (store) => {
            let state = props.store.getState()
            const addPost = () => {
                store.dispatch(addPostCreator(state.profilePage.newPostText))
            }
            const onPostChange = (value: string) => {
                let action = updateNewPostTextCreator(value);
                store.dispatch(updateNewPostTextCreator(value))
            }


            return <MyPosts
                newPostText={state.profilePage.newPostText}
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.posts}/>
        }
    }
    </StoreContext.Consumer>
}
// стейтовые данные
let mapStateToProps = (state: DialogsPageType) => {
    return {
        dialogsPage: store.getState().dialogsPage
    }
}
// берет колбеки которые отправим в ПК
let mapDispatchToProps = (dispatch: any) => {
    return {
        // в теле функции логика что они делали:
        updateNewMessageBody:(value: string) => {
            dispatch(updateNewMessageBodyCreator(value))
        },
        sendMessage:() => {
            dispatch(sendMessageCreator())

        }
    }
}





