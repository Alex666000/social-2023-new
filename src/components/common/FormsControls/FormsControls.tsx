import React from 'react'
import styles from './FormsControls.module.css'
import {Field, WrappedFieldProps} from 'redux-form';
import {FieldValidatorType} from '../../../utils/validators/validators';

type FormControlPropsType = {
    // meta: WrappedFieldMetaProps - или так одной строкой типизируется проще
    meta: {
        touched: boolean
        error?: string | null
    },
    // children: React.ReactNode типизируется
    // children - не обязательно типизировать т.к  React.FC итак описывает внутри свойство children
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = <FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         props = {},
                                                         text = '') =>
    <div>
    <Field placeholder={placeholder} name={name}
           validate={validators}
           component={component}
           {...props}
    /> {text}
</div>;

export type GetStringKeys<T> = Extract<keyof T, string>