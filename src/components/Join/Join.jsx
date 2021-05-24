import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const onChangeName = ({ target: {value} }) => {
        setName(value)
    }

    const onChangeRoom = ({ target: { value } }) => {
        setRoom(value)
    }
    
    const onClick = (event) => {
        // If variables name or room are empty, prevent to render the Chat component.
        (!name || !room) && event.preventDefault();
         
    }

    return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading"> Join </h1>
                    <div>
                        <input name="name" placeholder="Name" type="text" className="joinInput" onChange={(event) => onChangeName(event)}/>
                    </div>
                    <div>
                        <input name="room" placeholder="Room" type="text" className="joinInput" onChange={(event) => onChangeRoom(event)}/>
                    </div>
                    <Link onClick={(event) => onClick(event)} to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit"> Sign In </button> 
                    </Link>
                </div>
            </div>
    )

}

export default Join;