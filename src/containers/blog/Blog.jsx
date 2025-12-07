import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Vulcan Fitness Studio, <br /> Our Programs & Services.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Bodybuilding" text="Build muscle and strength with guided weight-training routines for all levels. Safe, effective, and results-driven." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Calisthenics" text="Improve strength, flexibility, and balance with bodyweight calisthenics—functional fitness made simple." />
        <Article imgUrl={blog03} date=" Yoga" text="Boost flexibility, posture, and calmness with guided yoga—suitable for all levels." />
        <Article imgUrl={blog04} date="Zumba" text="Burn calories and boost stamina with fun, high-energy Zumba dance workouts." />
        <Article imgUrl={blog05} date="Cardio Training" text="Boost endurance and burn fat with dynamic cardio workouts like HIIT, cycling, and treadmill sessions." />
      </div>
    </div>
  </div>
);

export default Blog;
