import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

// дочерняя К формы...
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={Textarea} validate={[required,maxLength10]} placeholder={'Post message'}/>
            <button
                className={s.addPost}>Add post
            </button>
        </form>
    )
}
// передаем К вокруг которой нужно создать Redux форм:
    const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

// present component:
export const MyPosts = React.memo((props: InjectedFormProps<FormDataType & MyPostsPropsType> & MyPostsPropsType) => {
    // console.log('render')

    const postsElements = props.posts.map((p) => <Post key={p.id} message={p.message}
                                                       likeCount={p.likeCount}/>)

    // в параметры придут values после onSubmit формы
    const onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postBlock}>
            <h3> ----- My post -----</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

// types
type FormDataType = {
    newPostText: string
}



