import React, { Component, Fragment } from 'react'

import './App.css'
import ConfigContainer from './ConfigContainer'
import HomeContainer from './HomeContainer'
import SugerenceContainer from './SugerenceContainer'

class App extends Component {
    render() {
        return (
            <div className="grid">
                <ConfigContainer className="config-container">
                    
                </ConfigContainer>

                <HomeContainer className="home-container">
                    
                </HomeContainer>

                <SugerenceContainer className="sugerence-container">

                </SugerenceContainer>
            </div>
        )
    }
}

export default App