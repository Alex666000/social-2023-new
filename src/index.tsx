import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from "./components/App/App";
import {store} from './redux/redux-store';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>, document.getElementById('root')
);

