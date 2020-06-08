import React, { Component } from 'react'
import './TweetButton.css'

class TweetButton extends Component {
    render() {
        return (
            <div className="button-container">
                <button className="tweet-button">
                    Twittear
                </button>
            </div>
            
        )
    }
}

export default TweetButton