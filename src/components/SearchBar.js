import React, { Component } from 'react'

import './SearchBar.css'
import search from '../img/search-gray-icon.png'

// Problem with the CaretPosition, it appears at

class SearchBar extends Component {
    render() {
        return(
            <div className="search-bar-container">
                <div className="search-bar-container-box">
                    <img src={search} className="search-bar-container-box-icon" />
                    <input className="search-bar-container-box-input">
                    </input>
                </div>
                
            </div>
        )
    }
}

export default SearchBar