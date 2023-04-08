import React, {ComponentType, lazy} from "react";
import "./App.css";
import {Navbar} from "components/Navbar/Navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "components/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "redux/app-reducer";
import {Preloader} from "components/common/Preloader/Preloader";
import {AppRootStateType} from "redux/redux-store";
import {withSuspense} from "hoc/withSuspense";

// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component<PropsType> {
    // глобальная ошибка
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>
                        <Route
                            path={"/dialogs"}
                            render={withSuspense(DialogsContainer)}
                        />
                        <Route
                            path={"/profile/:userId?"}
                            render={withSuspense(ProfileContainer)}
                        />
                        <Route
                            path={"/users"}
                            render={() => <UsersContainer/>}/>
                        <Route
                            path={"/login"}
                            render={() => <LoginContainer/>}/>
                        <Route
                            path={"*"}
                            render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>

                </div>
            </div>);
    }
}

const MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({initialized: state.app.initialized});

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
