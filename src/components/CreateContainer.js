import React, { Component } from 'react'
import './CreateContainer.css'
import profile from '../img/wink.png'
import image from '../img/image-icon.png'
import gif from '../img/gif-icon.png'
import poll from '../img/poll-icon.png'
import emoji from '../img/emoji-icon.png'
import date from '../img/date-icon.png'

class CreateContainer extends Component {
    state = { tweet: ""};

    componentDidMount() {
        this.setState({tweet : "¿Qué está pasando?"})
    }


    onInputChange(event) {
        this.setState({tweet: event.target.value})
    }

        render() {
        return(
            <div className="create-container">
                <img src={profile} className="create-container-profile create-icon" />
                <input type="text" className="create-container-tweet" value={this.state.tweet}
                    onChange={this.onInputChange.bind(this)}></input>
                <img src={image} className="create-container-image create-icon" />
                <img src={gif} className="create-container-gif create-icon" />
                <img src={poll} className="create-container-poll create-icon" />
                <img src={emoji} className="create-container-emoji create-icon" />
                <img src={date} className="create-container-date create-icon" />

                <button className="create-container-button">Twittear</button>
            </div>
        )
    }
}

export default CreateContainer