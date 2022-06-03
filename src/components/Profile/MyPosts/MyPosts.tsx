import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import state from '../../../redux/state';

export const MyPosts: React.FC = (props) => {
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert('Hello')
    }

    let postsElements = state.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost} className={s.addPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

