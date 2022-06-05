import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let newPostElement: any = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert('Hello')
    }

    let postsElements = props.posts.map((p) => <Post id={1} message={p.message} likeCount={p.likeCount}/>)

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

