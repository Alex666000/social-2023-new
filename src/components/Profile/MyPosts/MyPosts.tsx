import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';


export const MyPosts: React.FC = (props) => {
    let posts = [
        {id: 1, message: 'Hello', likeCount: 12},
        {id: 2, message: 'How are you?', likeCount: 10},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (
            <div className={s.postBlock}>
                <h3>My post</h3>
                <div>
                    <textarea></textarea>
                    <button className={s.addPost}>Add post</button>
                </div>
                <div  className={s.posts}>
                    {postsElements}
                </div>
            </div>
    );
};

