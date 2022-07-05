import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {StoreType} from './redux/store';

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            {/*У нас отображается Dialogs или Profile*/}
            <div className={'app-wrapper-content'}>

                <Route
                    path={'/dialogs'}
                    render={() => <Dialogs store={props.store} />}
                />
                <Route
                    path={'/profile'}
                    render={() => <Profile store={props.store}
                    />}/>
            </div>
        </div>)
}

export default App;