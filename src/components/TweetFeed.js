import React, { Component } from 'react'
import './TweetFeed.css'
import profile from '../img/wink.png'

class TweetFeed extends Component {
    render() {
        return(
            <div className="tweet-feed">
                <div className="tweet-feed-container-image">
                    <img src={profile} className="profile-box-picture" />
                </div>
            </div>
        )
    }
}

export default TweetFeed