import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostPropsType = {
    hey: string
}
const MyPosts: React.FC<MyPostPropsType> = (props) => {
    return (
            <div className={s.postBlock}>
                <h3>My post</h3>
                <div>
                    <textarea></textarea>
                    <button className={s.addPost}>Add post</button>
                </div>
                <div  className={s.posts}>
                    <Post message={'hello how are you'}/>
                    <Post message={'my name is Alex'}/>
                    <Post message={'football'}/>
                </div>
            </div>
    );
};

export default MyPosts;