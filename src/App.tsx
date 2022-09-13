import React, {ComponentType} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {AppRootStateType} from './redux/redux-store';

class App extends React.Component<PropsType> {
    componentDidMount() {
        // this.props.getAuthUserData()
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route
                        path={'/dialogs'}
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path={'/profile/:userId?'}
                        render={() => <ProfileContainer/>}/>
                    <Route
                        path={'/users'}
                        render={() => <UsersContainer/>}/>
                    <Route
                        path={'/login'}
                        render={() => <Login />}/>
                </div>
            </div>)
    }
}
const MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({initialized: state.app.initialized})

export default compose<ComponentType>(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App);

// types
type PropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    // Арр получит теперь знание проинициализировано оно или нет:
    initialized: boolean
}
type MapDispatchToPropsType = {
    // getAuthUserData: () => void
    initializeApp: () => void
}
