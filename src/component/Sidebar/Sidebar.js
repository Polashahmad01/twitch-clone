import React from 'react';

import './Sidebar.css';
import Channel from '../Channel/Channel';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                    <Channel 
                        avater="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo" 
                        name="FreeCodeCamp"
                        follower="2.90M"
                    />
                    <Channel 
                        avater="https://yt3.ggpht.com/ytc/AAUvwniQTOcy62OHAnqatgn_9G1dXjD1hUDbgOUpZTcN1A=s88-c-k-c0x00ffffff-no-rj"
                        name="Academind"
                        follower="620K"
                    />
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel 
                    avater="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s88-c-k-c0x00ffffff-no-rj"
                    name="Traversy Media"
                    follower="1.40M"
                />
                <p className="sidebar__topShowMore">Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search to Add Friends" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;