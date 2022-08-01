import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {DataAuthType, setAuthUserData} from '../../redux/auth-reducer';
import {authAPI} from '../../api/api';

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    componentDidMount() {
        authAPI.getAuthMe().then(response => {
            if (response.data.resultCode = 0) {
                // диспатчим автаризационные данные что получили с сервера:
                let {login, id, email} = response.data.data.login
                this.props.setAuthUserData({id, email, login})
            }
        })

    }

    render() {
        return <Header {...this.props}  />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    setAuthUserData: ({id, email, login}: DataAuthType) => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)


