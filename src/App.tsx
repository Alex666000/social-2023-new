import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {ActionsTypes, StoreType} from './redux/store';

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            {/*У нас отображается Dialogs или Profile*/}
            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           newMessageBody={state.dialogsPage.newMessageBody}
                           dispatch={props.store.dispatch}
                           dialogsPage={state.dialogsPage}

                       />}
                />
                <Route
                    path={'/profile'}
                    render={() => <Profile
                        dispatch={props.store.dispatch}
                        profilePage={state.profilePage}
                    />}/>
            </div>
        </div>)
}

export default App;