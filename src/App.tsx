import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {StoreType} from './redux/store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    value?: StoreType
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            {/*У нас отображается Dialogs или Profile*/}
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