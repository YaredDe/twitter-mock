import React from 'react'

import './SugerenceNews.css'
import lider from '../img/lider.jpg'
import banana from '../img/banana.jpg'
import mecha from '../img/mecha.jpg'

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

                <div className="sugerence-news-element">
                    <div className="sugerence-news-info">Chango &middot; 30 minutos</div>
                    <div className="sugerence-news-text">Pana se ve fresco en su banana</div>
                    <img src={banana} className="sugerence-news-image"></img>
                </div>

                <div className="sugerence-news-element">
                    <div className="sugerence-news-info">Mucho texto &middot; 2 minutos</div>
                    <div className="sugerence-news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>

                <div className="sugerence-news-element">
                    <div className="sugerence-news-info">Tendencia en el mundo</div>
                    <div className="sugerence-news-hashtag">#RandomChimpEvent</div>
                    <div className="sugerence-news-hashtag-info">10,4mil Tweets</div>
                </div>

                <div className="sugerence-news-element">
                    <div className="sugerence-news-info">Política &middot; 24 horas</div>
                    <div className="sugerence-news-text">Funcionarios de Japón apruevan primer prototipo de mecha</div>
                    <img src={mecha} className="sugerence-news-image"></img>
                </div>

                <div className="sugerence-news-more">
                    <div className="sugerence-new-more-text">Mostrar más</div>
                </div>

            </div>
        )
    }
}

export default SugerenceNews