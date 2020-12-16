import React from 'react';

import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="app__main">
                <Sidebar />
                <Body />
            </div>
        </div>
    );
};

export default App;