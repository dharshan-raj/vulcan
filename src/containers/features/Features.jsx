import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Train With Purpose',
    text: 'At Vulcan Fitness Studio, fitness isn’t just a routine — it’s a lifestyle. We help you unlock your potential through structured training, consistency, and motivation.',

  },
  {
    title: 'Programs for Every Goal',
    text: 'Whether your goal is fat loss, strength building, muscle gain, or overall fitness, we offer personalized plans and professional guidance to help you get there faster.',
  },
  {
    title: 'Your Journey Starts Today',
    text: 'Nothing changes until you decide to start. Commit to your goals, show up every day, and we’ll help you transform into the strongest version of yourself.',

  },
  {
    title: 'Ignite Your Strength',
    text: 'At Vulcan Fitness Studio, every workout brings you closer to the strongest version of yourself.We guide you with proper training, discipline, and focus so you can transform your body and mind.Start today — your future self willthank you.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Forge Your Strength.Transform Your Body. Welcome to Vulcan Fitness Studio.</h1>
      <p>Train the Vulcan Way</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
