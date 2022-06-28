import React, {ChangeEvent, MouseEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsTypes, PostType} from '../../../redux/state';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reduser';

type MyPostsPropsType = {
    posts: PostType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

// present component:
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
// constants:
    const postsElements = props.posts.map((p) => <Post key={p.id} id={1} message={p.message} likeCount={p.likeCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()
// logic:
    const addPost = (e: MouseEvent<HTMLButtonElement>) => {
        if (newPostElement.current) {
            // берем из пропсов newPostText - так как отправляем dispatch - чем при нажатии на кнопку:
            props.dispatch(addPostCreator(props.newPostText))
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextCreator(e.currentTarget.value))
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}

                ></textarea>
                <button
                    onClick={addPost}
                    className={s.addPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

