import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
    return (
        <div className='gpt4__header section__padding' id="home">
            <div className='gpt4__header-content'>
                <h1 className="gradient__text">Let's Build Something amazing with GPT-4 OpenAI'</h1>
                <p>Generative Pre-trained Transformer 4 is a multimodal large language model created by OpenAI and the fourth in its GPT series. It was released on March 14, 2023, and has been made publicly available in a limited form via ChatGPT Plus, with access to its commercial API being provided via a waitlist.</p>
                <div className="gpt4__header-content__input">
                    <button type='button'><a target='_blank' rel="noreferrer" href='https://www.gpt-4.com/#/'>Check Latest News!</a></button>
                </div>
                <div className='gpt4__header-content__people'>
                    <img src={people} alt="people" />
                    <p>1,350+ people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt4__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    );
};

export default Header;