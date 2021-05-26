import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

// Components.
import InfoBar from '../InfoBar/InfoBar';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, () => {});

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search])

    useEffect(() => {

        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

    }, [messages])

    // onChange handler for the input field. Do some distructuring of the event object, to access the value prop.
    const onChange = ({ target: { value } }) => {
        setMessage(value)
    }

    // We do some destructuring of the event object, to access the key prop.
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        
        <div className="outerContainer">
            <div className="container">

                <InfoBar
                    room={room}
                />

            </div>
        </div>

    )
}

export default Chat;