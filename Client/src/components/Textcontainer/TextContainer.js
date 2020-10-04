import React from 'react';

import onlineIcon from '../../Icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      {/* <h1>Ứng dụng làm vui vẻ <span role="img" aria-label="emoji">💬</span></h1> */}
      <h2>Chúc các bạn có cuộc trò chuyện thú vị <span role="img" aria-label="emoji">❤️</span></h2>
      {/* <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> */}
    </div>
    {
      users
        ? (
          <div>
            <h1>Thành viên tham gia:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;