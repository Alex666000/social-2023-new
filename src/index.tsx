import React from 'react';
import './index.css';
import {store} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


let rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root')
    );
}
store.subscribe(rerenderEntireThree)
rerenderEntireThree()
