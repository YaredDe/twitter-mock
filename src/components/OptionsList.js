import React, { Component } from 'react'
import './OptionsList.css'
import tweet from '../img/tweet-icon.png'
import homeHover from '../img/home-icon-hover.png'
import search from '../img/search-icon.png'
import message from '../img/message-icon.png'
import notification from '../img/notification-icon.png'
import profile from '../img/profile-icon.png'
import saved from '../img/saved-icon.png'
import more from '../img/more-icon.png'
import list from '../img/list-icon.png'

class OptionsList extends Component {
    render() {
        return (
            <div className="options-box">
                    <div className="options-box-element">
                       {/* <div className="options-rectangle"> */}
                        <img className="logo" src={tweet}></img>
                        <div className="text"></div>
                        {/* </div> */}
                     </div>
                     

                     <div className="options-box-element">
                     {/* <div className="options-rectangle"> */}
                        <img className="icon" src={homeHover}></img>
                        <div className="text">Inicio</div>
                     {/* </div> */}
                     </div>
                     
                     
                     <div className="options-box-element">
                        <img className="icon" src={search}></img>
                        <div className="text">Explorar</div>
                     </div>
                     
                     
                     <div className="options-box-element">
                        <img className="icon" src={notification}></img>
                        <div className="text">Notificaciones</div>
                     </div>
                     

                     <div className="options-box-element">
                        <img className="icon" src={message}></img>
                        <div className="text">Mensajes</div>
                     </div>
                     

                     <div className="options-box-element">
                        <img className="icon" src={saved}></img>
                        <div className="text">Guardados</div>
                     </div>
                     

                     <div className="options-box-element">
                        <img className="icon" src={list}></img>
                        <div className="text">Listas</div>
                     </div>
                     

                     <div className="options-box-element">
                        <img className="icon" src={profile}></img>
                        <div className="text">Perfil</div>
                     </div>
                     

                     <div className="options-box-element">
                        <img className="icon" src={more}></img>
                        <div className="text">Más opciones</div>
                     </div>
                     
                     
            </div>
        )
    }
}

export default OptionsList