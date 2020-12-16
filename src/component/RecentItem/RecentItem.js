import React from 'react';

import './RecentItem.css';

const RecentItem = ({ url, title, channelName }) => {
    return (
        <div className="recentItem">
            <div className="recentItem__item">
            <iframe 
                width="320" 
                height="235" 
                src={url} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            >
            </iframe>
            <div className="item__details">
                <img src="" alt=""/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>{channelName}</p>
                    <p>Software Technology</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default RecentItem;