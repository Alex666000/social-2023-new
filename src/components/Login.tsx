import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "./common/FormsControls/FormsControls";
import {required} from "utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "redux/redux-store";
import {login} from "redux/auth-reducer";
import styles from "./common/FormsControls/FormsControls.module.css";

type LoginFormOwnProps = {
    captchaUrl: string | null | undefined
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                                handleSubmit,
                                                                                                                error,
                                                                                                                captchaUrl
                                                                                                            }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
                {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
                {createField<LoginFormValuesTypeKeys>(undefined, "password", [required], Input, {type: "checkbox"}, "rememberMe")}
            </div>
            {/*<Field placeholder={'Email'} name={'password'} validate={[required]} component={Input}/>*/}
            {/*<Field placeholder={'Password'} name={'email'} validate={[required]} component={Input} type={'password'}/>*/}
            {/*<Field validate={[required]} type={'checkbox'} name={'rememberMe'} component={Input}/> remember me*/}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}

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
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
// если залогинены
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>;
    }
    // если не залогинены идем сюда на логинезацию
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={ props.captchaUrl}/>
    </div>;
};

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

// @ts-ignore
export const LoginContainer = connect(mapStateToProps, {login})(Login);

// types
type MapStateToPropsType = {
    isAuth: boolean | null
    captchaUrl?: string | null
}
type MapDispatchToPropsType = {
    login: (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null | undefined) => void
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

// 2 типа для типизации - уточнения createField
export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}
// ключи в LoginFormValuesTypeKeys - строковые значения не все - а только из LoginFormValuesType
export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>


