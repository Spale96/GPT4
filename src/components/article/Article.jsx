import React from 'react';
import './article.css';


const Article = ({ imgUrl, date, text, link }) => (
    <div className="gpt4__blog-container_article">
        <div className="gpt4__blog-container_article-image">
            <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="gpt4__blog-container_article-content">
            <div>
                <p>{date}</p>
                <h3>{text}</h3>
            </div>
            <button className='gpt4__article_button' type='button'><a href={link} target='_blank' rel="noopener noreferrer">Learn More</a></button>
        </div>
    </div>
);

export default Article;  