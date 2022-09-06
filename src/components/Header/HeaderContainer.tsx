import React from 'react';
import {Header} from './Header';
import {AppRootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header {...this.props}  />
    }
}


let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData,logout})(HeaderContainer)

// types
type PropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    logout: () => void
}


