import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostType>
    addPostCallback: (mess: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if(newPostElement.current) {
            props.addPostCallback(newPostElement.current.value)
        }


        // newPostElement.current?.value = ''
    }

    let postsElements = props.posts.map((p) => <Post id={1} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea
                    ref={newPostElement}

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

