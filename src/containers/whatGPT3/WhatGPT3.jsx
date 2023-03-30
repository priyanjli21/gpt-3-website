import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 (Generative Pre-trained Transformer 3) is the third iteration of OpenAI's large-scale language model. It is one of the largest language models ever created, with 175 billion parameters.
      GPT-3 is designed to generate human-like text, and it has been trained on massive amounts of data from the internet, including books, articles, and websites. " />
        </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots are computer programs designed to simulate conversation with human users, usually through text-based interfaces such as messaging apps or websites.." />
      <Feature title="Knowledgebase" text=" A knowledge base is a centralized repository of information that is used to store and manage knowledge and information about a particular topic or domain" />
      <Feature title="Education" text="Education is the process of acquiring knowledge, skills, values, and attitudes through a variety of formal and informal learning experiences" />
    </div>
  </div>
);

export default WhatGPT3;