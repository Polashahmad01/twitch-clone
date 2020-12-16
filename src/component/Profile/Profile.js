import React from 'react';

import './Profile.css';
import RecentItem from '../RecentItem/RecentItem';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png" alt="profile" />
                <div className="profile__topLeftDetails">
                    <h1>FreeCodeCamp</h1>
                    <h3>1M followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <li className="active">Home</li>
                <li>Videos</li>
                <li><i className="fas fa-arrow-up"></i></li>
                <li>Chat</li>
                <li>Schedule</li>
                <li>About</li>
            </div>
            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem 
                        url={'https://www.youtube.com/embed/n1mdAPFq2Os'}
                        title="React / GraphQL Course - Build a social media app (MERNG Stack)"
                        channelName="FreeCodeCamp"
                    /> 
                    <RecentItem 
                        url={'https://www.youtube.com/embed/mU6anWqZJcc'}
                        title="Learn HTML5 and CSS3 From Scratch - Full Course"
                        channelName="FreeCodeCamp"
                    /> 
                    <RecentItem 
                        url={'https://www.youtube.com/embed/0oXYLzuucwE'}
                        title="What is a RESTful API? | Creating a REST API with Node.js"
                        channelName="Academind"
                    /> 
                    <RecentItem 
                        url={'https://www.youtube.com/embed/JPT3bFIwJYA'}
                        title="ReactJS Basics - #1 What is React?"
                        channelName="Academind"
                    /> 
                    <RecentItem 
                        url={'https://www.youtube.com/embed/sBws8MSXN7A'}
                        title="React JS Crash Course"
                        channelName="Traversy Media"
                    /> 
                    <RecentItem 
                        url={'https://www.youtube.com/embed/hdI2bqOjy3c'}
                        title="JavaScript Crash Course For Beginners"
                        channelName="Traversy Media"
                    /> 
                </div>
            </div>
        </div>
    );
};

export default Profile;