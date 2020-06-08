import React, { Component } from 'react'
import './TweetFeed.css'
import profile from '../img/wink.png'
import art from '../img/art.png'
import reply from '../img/reply-icon.png'
import retweet from '../img/retweet-icon.png'
import like from '../img/like-icon.png'
import share from '../img/share-icon.png'

class TweetFeed extends Component {
    render() {
        return(
            <div className="tweet-feed">
                <div className="tweet-feed-container-image">
                    <img src={profile} className="profile-box-picture tweet-feed-profile-pic" />
                    <div className="tweet-feed-profile-name">Usuario</div>
                    <div className="tweet-feed-profile-tag">@Hardcoded</div>
                    <div className="tweet-feed-time">&middot; 15 min</div>
                    <div className="tweet-feed-text">Some text</div>
                    <img src={art} className="tweet-feed-image" />
                    <div className="tweet-feed-info">
                        <img src={reply} className="tweet-feed-profile-reply-icon" />
                        <div className="tweet-feed-profile-reply-count"></div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default TweetFeed