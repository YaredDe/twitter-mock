import React, { Component } from 'react'
import './HomeContainer.css'
import HomeBanner from './HomeBanner'
import CreateContainer from './CreateContainer'
import TweetFeed from './TweetFeed'

class HomeContainer extends Component {
    render() {
        return(
            <div className="home-container">
                <HomeBanner>

                </HomeBanner>

                <CreateContainer>
                    
                </CreateContainer>

                <TweetFeed>

                </TweetFeed>

            </div>
        )
    }
}

export default HomeContainer