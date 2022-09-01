import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {DialogsPropsType} from './DialogsContainer';

type PropsType = {
    isAuth: boolean
}
type FormDataType = {
    newMessageBody: string
}

export const Dialogs: React.FC<InjectedFormProps<FormDataType> & DialogsPropsType & PropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

   const addNewMessage = (values: FormDataType) => props.sendMessage(values.newMessageBody)

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    {/*<AddMessageForm/>*/}
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};
// создали дочернюю компоненту — задача которой заниматься сбором данных с формы
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
                {/* <textarea value={props.dialogsPage.newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>*/}
            </div>
            <div>
                <button>Send_message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

