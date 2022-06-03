import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import state, {ProfilePageType, SidebarType} from './redux/state';

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: ProfilePageType
    sidebar: SidebarType
}

ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>, document.getElementById('root')
);