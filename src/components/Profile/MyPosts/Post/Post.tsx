import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHrYQj-TB5Vu5GASryHzs13C94vlvUqX7KQ&usqp=CAU"
                alt="avatar"/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    );
};

