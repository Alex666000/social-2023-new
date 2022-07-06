import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {store} from './redux/store';
import {StoreContext} from './StoreContext';
import {Provider} from 'react-redux';


let rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
               <App/>
        </BrowserRouter>, document.getElementById('root')
    );
}
store.subscribe(() => {
    rerenderEntireThree()
})
rerenderEntireThree()
