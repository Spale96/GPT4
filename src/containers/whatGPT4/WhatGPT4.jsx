import React from 'react';
import './whatGPT4.css';
import { Feature } from '../../components';

const WhatGPT4 = () => {
    return (
        <div className='gpt4__whatgpt4 section_margin' id="whpt4">
            <div className='gpt4__whatgpt4-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
            </div>
            <div className='gpt4__whatgpt4-container'>
                <Feature title="Chatbots" text="GPT-4 is OpenAI's most advanced system, producing safer and more useful responses · GPT-4 can solve difficult problems with greater accuracy." />
                <Feature title="Knowledgebase" text="It is more creative than previous models, it hallucinates significantly less, and it is less biased. it can pass a bar exam and score a 5 on several AP exams. there is a version with a 32k token context." />
                <Feature title="Education" text="We now support a “system” message in the API that allows developers (and soon ChatGPT users) to have significant customization of behavior. if you want an AI that always answers you in the style of Shakespeare, or in json, now you can have that." />
            </div>
        </div>
    );
};

export default WhatGPT4;