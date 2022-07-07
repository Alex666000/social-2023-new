import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {store} from './redux/store';
import {Provider} from 'react-redux';

let rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>

        </BrowserRouter>, document.getElementById('root')
    );
}
store.subscribe(() => {
    rerenderEntireThree()
})
rerenderEntireThree()
