import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Large Scale',
    text: 'GPT-3 has 175 billion parameters, making it one of the largest language models ever created. This allows it to generate more coherent and relevant responses to text input.',
  },
  {
    title: 'Natural Language Processing',
    text: 'GPT-3 uses advanced natural language processing (NLP) techniques to understand and generate human-like text. It can understand the context and meaning of sentences, and generate responses that are coherent and relevant. .',
  },
  {
    title: 'Multilingual',
    text: 'PT-3 can understand and generate text in multiple languages, including English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, and more..',
  },
  {
    title: 'Zero-shot Learning:',
    text: 'GPT-3 can perform tasks that it has not been explicitly trained on, a technique called zero-shot learning. For example, it can translate languages it has not been trained on, or answer questions it has never seen before.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;