import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {state} from './redux/state';


const App :React.FC = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            {/*У нас отображается Dialogs или Profile*/}
            <div className={'app-wrapper-content'}>
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <Dialogs
                            state={props.state.dialogsPage.dialogs}
                            state={props.state.dialogsPage.messages}/>}/>
                <Route
                    path={'/profile'}
                    render={() => <Profile state={props.state.ProfilePage.posts}/>}/>
            </div>
        </div>
}

export default App;