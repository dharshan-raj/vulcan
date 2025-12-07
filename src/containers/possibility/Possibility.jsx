import React from 'react';
import possibilityImage from '../../assets/OIP (5).webp';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Start Your Fitness Journey</h4>
      <h1 className="gradient__text">Unleash Your Strength <br /> Transform Your Life.</h1>
      <p>At Vulcan Fitness Studio, we help you build muscle, burn fat, and improve your overall lifestyle. From bodybuilding to yoga, our programs are designed to support every fitness level.</p>
      <h4> Get Started</h4>
    </div>
  </div>
);

export default Possibility;
