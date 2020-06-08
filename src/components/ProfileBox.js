import React, { Component } from 'react'
import './ProfileBox.css'
import picture from '../img/wink.png'

class ProfileBox extends Component {
    render() {
        return (
            <div className="profile-box">
                <img src={picture} className="profile-box-picture" />
                <div className="profile-box-username">
                    Usuario
                    <div className="profile-box-usertag">
                    @Hardcoded
                </div>
                </div>
                
            </div>
            
        )
    }
}

export default ProfileBox