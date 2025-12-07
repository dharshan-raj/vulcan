import React from 'react';
import gpt3Logo from '../../assets/WhatsApp Image 2025-12-07 at 15.08.44_04176fd9.jpg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">You’re stronger than your doubts and bigger than your fears.Take one step forward — that,s all you need to begin.Greatness starts with courage, not perfection.</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Register</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="GPT3 Logo" />
        <p>Strength | power | Discipline <br /> Unleash your potential</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>home</h4>
        <p>programs</p>
        <p>Trainers</p>
        <p>membership</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>fitness</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>phone: +91 996984891</p>
        <p>Email:Vulcan@gmail.com</p>
        <p>Address: In the boarder of Hell</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© 2025 Vulcan Fitness Studio. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
