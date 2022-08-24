import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';


type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        // вытащили isAuth чтобы не ушел дальше в К_ту Component, а остальные пропсы прокинули в неё..:
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    const ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectRedirectComponent
}
