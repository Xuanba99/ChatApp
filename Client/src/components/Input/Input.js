import React from 'react';

import './Input.css';
const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form>
            <input
                className="input"
                type="text"
                placeholder="Nội dung..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />

            <button className="sendButton" onClick={(event) => sendMessage(event)}>Gửi</button>
        </form>
    );

}

export default Input;