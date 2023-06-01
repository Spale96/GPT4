import React from 'react';
import './cta.css';

const Cta = () => {
    return (
        <div className="gpt4__cta">
            <div className="gpt4__cta-content">
                <p>Request Early Access to Get Started</p>
                <h3>Register Today & start exploring the endless possibilities.</h3>
            </div>
            <div className="gpt4__cta-btn">
                <button type="button"><a target='_blank' rel="noopener noreferrer" href='https://openai.com/waitlist/gpt-4-api'>Get Started</a></button>
            </div>
        </div>
    );
};

export default Cta;