import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    {
        title: 'Analyzing more than text',
        text: 'One of the most jaw-dropping use cases so far came from an OpenAI video demo that showed how a drawing could be turned into a functional website within minutes.',
    },
    {
        title: 'Coding made even easier',
        text: 'Some early GPT-4 users with very little to no prior coding knowledge have also used it to recreate iconic games such as Pong, Tetris or Snake after following step-by-step instructions provided by the tool on how to do so.',
    },
    {
        title: 'Providing more precise responses',
        text: 'The latest version can now give responses up to 25,000 words, up from about 4,000 previously, and can provide detailed instructions for even the most unique scenarios, ranging from how to clean a piranha’s fish tank to extracting the DNA of a strawberry.',
    },
    {
        title: 'Streamlining work across various industries',
        text: 'Joshua Browder, CEO of legal services chatbot DoNotPay, said his company is already working on using the tool to generate “one click lawsuits” to sue robocallers, in an early indication of the vast potential for GPT-4 to change how people work across industries.',
    },
];

const Features = () => (
    <div className="gpt4__features section__padding" id="features">
        <div className="gpt4__features-heading">
            <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt4__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default Features;
