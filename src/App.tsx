import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8yndOQhIaFf36hkWn9w6UAff4nmPREbmvQ&usqp=CAU'
                    alt="react-logo"/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOTrZH4dN0uKM1hMP5b4ewjeyEERCzo7kA&usqp=CAU" alt="TS"/>
                </div>
                <div>
                    avatar + descripshion
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;