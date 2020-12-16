import React from 'react';

import './Body.css';
import Profile from '../Profile/Profile';

const Body = () => {
    return (
        <div className="body">
            <div className="body__left">
                <Profile />
            </div>
        </div>
    );
};

export default Body;