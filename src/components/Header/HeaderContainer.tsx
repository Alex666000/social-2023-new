import React from 'react';
import {Header} from './Header';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {DataAuthType} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData: () => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)


