import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';



const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                {/*У нас отображается Dialogs или Profile*/}
                <div className={'app-wrapper-content'}>
                        <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                        <Route path={'/profile'} render={() => <Profile/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;