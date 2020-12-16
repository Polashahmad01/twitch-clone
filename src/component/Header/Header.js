import React from 'react';
import { Avatar } from '@material-ui/core';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img 
                    src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
                    alt="twitch-logo"
                    className="header__logo"
                />
                <li>Following</li>
                <li>Browse</li>
                <div className="header__verticalLine" />
                <li>Esports</li>
                <li>Music</li>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search" className="header__search"/>
                <div className="header__centerLogoContainer">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="header__right">
                <div className="header__rightContainer">
                    <i className="fas fa-crown"></i>
                    <i className="fas fa-inbox"></i>
                    <i className="fas fa-comment-alt"></i>
                    <div className="header__rightBits">
                        <i className="fas fa-gem"></i>
                        <h4>Get Bits</h4>
                    </div>
                    <Avatar className="header__avatar" />
                </div>
            </div>
        </div>
    );
};

export default Header;