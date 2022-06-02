import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hello', likeCount: 12},
    {id: 2, message: 'How are you?', likeCount: 10},
]
let dialogs = [
    {id: 1, name: 'Margarita'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Svetlana'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Victor'},
]
let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What is your name'},
    {id: 4, message: 'My name is....'},
    {id: 5, message: 'Let\'s go'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);