import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from './common/FormsControls/FormsControls';
import {required} from '../utils/validators/validators';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../redux/redux-store';
import {login} from '../redux/auth-reducer';
import styles from './common/FormsControls/FormsControls.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={'Email'} name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder={'Password'} name={'password'} component={Input}
                       type={'password'}/>
            </div>
            <div>
                <Field validate={[required]} type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>

    );
};
// передаем К вокруг которой нужно создать Редакс форм:
const LoginReduxForm = reduxForm<FormDataType>({form: 'login',})(LoginForm)

export const Login = (props: DialogsPropsType | any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
// если залогинены
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    // если не залогинены идем сюда на логинезацию
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)

// types
type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string | null, password: string | null, rememberMe: boolean) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

