import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

/*type MyPostsPropsType = {
    id: number
    message: string
    likeCount: number
}*/

const MyPosts: React.FC = (props) => {
    let postsData = [
        {id: 1, message: 'Hello', likeCount: 12},
        {id: 2, message: 'How are you?', likeCount: 10},
    ]

    return (
            <div className={s.postBlock}>
                <h3>My post</h3>
                <div>
                    <textarea></textarea>
                    <button className={s.addPost}>Add post</button>
                </div>
                <div  className={s.posts}>
                    <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                    <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
                </div>
            </div>
    );
};

export default MyPosts;