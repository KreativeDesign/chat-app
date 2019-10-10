import React from 'react';
import './Contact.css';

const Contact = ({avatar, name, isOnline}) => {
    const onlineClass = isOnline ? "status-online" : "status-offline"
    const textOnline = isOnline ? "online" : "offline"
    
    return (
        <div className='Contact'>
            <img src={avatar} alt='User' className="avatar" />
            <div>
                <h1 className='name'>{name}</h1>
                <div className="status">
                    <div className={onlineClass}></div>
                    <div className="status-text">{textOnline}</div>
                </div>

            </div>
        </div>
    );
}
export default Contact;