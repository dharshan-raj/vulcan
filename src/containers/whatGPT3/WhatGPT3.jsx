import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Membership Plans" text="Transform your fitness journey with plans designed for every goal and every body type. Whether you're starting your first workout or leveling up your routine, our memberships give you everything you need to grow stronger, move better, and stay motivated." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Basic Plan" text="Perfect for beginners who want access to essential gym equipment and a guided start to their fitness journey." />
      <Feature title="Standard Plan" text="deal for those who want a balanced mix of equipment, coaching, and workout programs.All Basic Plan features Access to group sessions (Zumba / Yoga)Personalized progress tracking" />
      <Feature title="Premium Plan" text="Here you go — everything in one clean line Perfect for serious fitness enthusiasts seeking maximum results; includes all Standard features, personal training sessions, advanced programs, and weekly nutrition check-ins." />
    </div>
  </div>
);

export default WhatGPT3;
