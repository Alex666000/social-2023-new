import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpExVyX0u7sbSBpSxVdui50mn1_slr9JXTw&usqp=CAU" alt="react-logo"/>
            </header>
            <nav>
                <div>Profile</div>
                <div>Messages</div>
                <div>Main content</div>
            </nav>
        </div>
    );
}

export default App;