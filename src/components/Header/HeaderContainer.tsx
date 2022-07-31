import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {DataAuthType, setAuthUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            // response придет ставим debugger и в консоле смотрим на ответ
            // проверяем resultCode = 0 - значит залогинены:
            if (response.data.resultCode = 0) {
                // диспатчим автаризационные данные что получили с сервера:
                let {login, id, email} = response.data.data.login
                this.props.setAuthUserData({id,email,login} )
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
    setAuthUserData: ({id,email, login}: DataAuthType) => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)


