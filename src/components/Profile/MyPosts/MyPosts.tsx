import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';


export const MyPosts= (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

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

