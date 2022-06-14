import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostType>
    addPostCallback: (mess: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map((p) => <Post key={p.id} id={1} message={p.message} likeCount={p.likeCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value)
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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
                <button onClick={addPost} className={s.addPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

