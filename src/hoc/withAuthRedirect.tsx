import React from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';
import {MapStateToPropsForRedirectType} from '../components/Profile/ProfileContainer';

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    // создаем отдельный класс для каждой целевой К-ты - отдельный  класс-обертку
    class RedirectComponent extends React.Component<any, any> {
        render() {
            // делаем логику редиректа
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            // перерисовываем целевую К_ту которую на входе передадут:
            return <Component {...this.props}/>
        }
    }
    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedRedirectComponent
};

