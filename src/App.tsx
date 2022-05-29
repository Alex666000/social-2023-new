import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';

const App: React.FC = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            {/*вместо Диалога разные компоненты можем (будем) подставлять*/}
            <div className={'app-wrapper-content'}>
                <Dialogs/>
            </div>

            {/*<Profile />*/}
        </div>
    );
}

export default App;