import React from 'react';
import gpt4Logo from '../../assets/logo1.png';
import './footer.css';

const Footer = () => {
    return (
        <div className="gpt4__footer section__padding">
            <div className="gpt4__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gpt4__footer-btn">
                <p><a target='_blank' rel="noopener noreferrer" href='https://openai.com/waitlist/gpt-4-api'>Request Early Access</a></p>
            </div>

            <div className="gpt4__footer-links">
                <div className="gpt4__footer-links_logo">
                    <img src={gpt4Logo} alt="gpt4_logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt4__footer-links_div">
                    <h4>Company</h4>
                    <p><a target='_blank' rel="noopener noreferrer" href='https://openai.com/policies/terms-of-use'>Terms & Conditions</a></p>
                    <p><a target='_blank' rel="noopener noreferrer" href='https://openai.com/policies/privacy-policy'>Privacy Policy</a></p>
                </div>
            </div>

            <div className="gpt4__footer-copyright">
                <p>@2022 GPT-4. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;