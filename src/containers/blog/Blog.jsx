import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="gpt4__blog section__padding" id="blog">
            <div className="gpt4__blog-heading">
                <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="gpt4__blog-container">
                <div className="gpt4__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 11, 2021" link='https://openai.com/research/gpt-4' text="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className="gpt4__blog-container_groupB">
                    <Article imgUrl={blog02} date="Oct 1, 2021" link='https://www.scientificamerican.com/article/what-the-new-gpt-4-ai-can-do/' text="What the New GPT-4 AI Can Do?" />
                    <Article imgUrl={blog03} date="Dec 26, 2021" link='https://www.akkio.com/chat-explore' text="Chat Explore helps you generate graphs and charts with GPT-4." />
                    <Article imgUrl={blog04} date="Jan 22, 2021" link='https://textcortex.com/post/what-is-gpt-4' text="In this article, we will explore general information about GPT-4 and examine its innovations, use cases and how it compares to GPT-3." />
                    <Article imgUrl={blog05} date="Nov 15, 2021" link='https://www.makeuseof.com/how-to-use-gpt4/' text="How to Use GPT-4 on ChatGPT Right Now!" />
                </div>
            </div>
        </div>
    );
};

export default Blog;