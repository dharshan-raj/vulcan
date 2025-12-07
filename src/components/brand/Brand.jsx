import React from 'react';
import { atlassian } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={atlassian} alt="Atlassian" />
    </div>
  </div>
);

export default Brand;
