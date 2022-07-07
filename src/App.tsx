import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


const App: React.FC<any> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route
                    path={'/dialogs'}
                    render={() => <DialogsContainer />}
                />
                <Route
                    path={'/profile'}
                    render={() => <Profile />}/>
            </div>
        </div>)
}

export default App;