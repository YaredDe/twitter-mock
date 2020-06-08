import React from 'react'

import './SugerenceNews.css'
import lider from '../img/lider.jpg'

class SugerenceNews extends React.Component {
    render() {
        return(
            <div className="sugerence-news-container">
                <div className="sugerence-news-header-container">
                    <div className="sugerence-news-header">Qué está pasando</div>
                </div>

                <div className="sugerence-news-element">
                    <div className="sugerence-news-info">Mundo &middot; 5 horas</div>
                    <div className="sugerence-news-text">Protestas continuan alrededor del mundo</div>
                    <img src={lider} className="sugerence-news-image"></img>
                </div>
            </div>
        )
    }
}

export default SugerenceNews