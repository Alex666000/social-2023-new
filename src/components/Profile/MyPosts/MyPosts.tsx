import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

// present component:
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

// constants:
    const postsElements = props.posts.map((p) => <Post key={p.id} id={1} message={p.message} likeCount={p.likeCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

// logic:
    const onAddPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = newPostElement.current?.value
        props.updateNewPostText(value!)
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
                    onClick={onAddPost}
                    className={s.addPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

