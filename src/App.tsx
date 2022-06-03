import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import state from './redux/state';
import {Profile} from './components/Profile/Profile';


const App: React.FC = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            {/*У нас отображается Dialogs или Profile*/}
            <div className={'app-wrapper-content'}>
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <Dialogs state={state.dialogsPage.dialogs}
                            state={state.dialogsPage.messages}/>}/>
                <Route
                    path={'/profile'}
                    render={() => <Profile state={state.profilePage.posts}/>}/>
            </div>
        </div>)
}

export default App;