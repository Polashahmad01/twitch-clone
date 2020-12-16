import React from 'react';

import './Channel.css';

const Channel = ({ avater, name, follower }) => {
    return (
        <div className="channel">
            <div className="channel__details">
                <img src={avater} alt={name} />
                <p>{name}</p>
            </div>
            <div className="channel__follower">
                <p>{follower}</p>
                <i className="fas fa-circle"></i>
            </div>
        </div>
    );
};

export default Channel;