import React from 'react';

// Style import.
import './InfoBar.css';

//Icons import.
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room }) => {

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={onlineIcon} alt="online icon" className="onlineIcon" />
                <h3> Room Name: {room} </h3>
            </div>

            <div className="rightInnerContainer">
                <a href="/"> <img src={closeIcon} alt="close icon"/> </a>
            </div>
        </div>
    )

}

export default InfoBar;