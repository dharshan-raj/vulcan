import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/fitness-body-builder-illustrations-0v4indqsr1cle3jt.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Vulcan fitness Studio</h1>
      <p>Every champion was once a beginner who refused to quit Keep moving, keep growing, keep fighting Your effort today is building the strength you need tomorrow.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="People" />
        <p>100+ people  visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="AI" />
    </div>
  </div>
);

export default Header;
