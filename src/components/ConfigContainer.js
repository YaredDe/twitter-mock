import React, { Component } from 'react'
import './ConfigContainer.css'
import OptionsList from './OptionsList'
import TweetButton from './TweetButton'
import ProfileBox from './ProfileBox'

class ConfigContainer extends Component {
    render() {
        return (
            <div className="config-grid">
                <OptionsList>

                </OptionsList>

                <TweetButton>

                </TweetButton>

                <ProfileBox>
                    
                </ProfileBox>
            </div>
            
        )
    }
}

export default ConfigContainer