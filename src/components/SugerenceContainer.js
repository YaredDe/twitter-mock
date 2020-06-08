import React, { Component } from 'react'

import './SugerenceContainer.css'
import SearchBar from './SearchBar'
import SugerenceNews from './SugerenceNews'

// Problem with the CaretPosition, it appears at

class SugerenceContainer extends Component {
    render() {
        return(
            <div className="sugerence-container">
                <SearchBar>
                    
                </SearchBar>

                <SugerenceNews>
                    
                </SugerenceNews>
            </div>
        )
    }
}

export default SugerenceContainer