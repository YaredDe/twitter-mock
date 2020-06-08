import React, { Component } from 'react'
import './HomeBanner.css'
import newsfeed from '../img/newsfeed-icon.png'

class HomeBanner extends Component {
    render() {
        return(
            <div className="home-banner">
                <div className="home-banner-text">
                    Inicio
                </div>

                <img src={newsfeed} className="newsfeed-icon" />
            </div>
        )
    }
}

export default HomeBanner