import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from './common/FormsControls/FormsControls';
import {required} from '../utils/validators/validators';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../redux/redux-store';
import {login} from '../redux/auth-reducer';
import styles from './common/FormsControls/FormsControls.module.css'

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField('Email', 'email', [required], Input)}
                {createField('Password', 'password', [required], Input, {type: 'password'})}
                {createField(undefined, 'password', [required], Input, {type: 'checkbox'}, 'rememberMe')}
            </div>
            {/*<Field placeholder={'Email'} name={'password'} validate={[required]} component={Input}/>*/}
            {/*<Field placeholder={'Password'} name={'email'} validate={[required]} component={Input} type={'password'}/>*/}
            {/*<Field validate={[required]} type={'checkbox'} name={'rememberMe'} component={Input}/> remember me*/}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>

    );
};
// передаем К вокруг которой нужно создать Редакс форм:
const LoginReduxForm = reduxForm<LoginFormValuesType>({form: 'login',})(LoginForm)

export const Login: React.FC<PropsType | any> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
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
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)

// types
type MapStateToPropsType = {
    isAuth: boolean | null
    captcha?: string | null
}
type MapDispatchToPropsType = {
    login: (email: string | null, password: string | null, rememberMe: boolean) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}
