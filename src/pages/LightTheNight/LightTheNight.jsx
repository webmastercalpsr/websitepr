import React from 'react';
import './LightTheNight.css';

import lightthenight from '../../assets/Philo/lightthenight.png';

const LightTheNight = () => {
  return (
    <div className="light-the-night-container">
      <h1 className="light-the-night-header">Light the Night</h1>
      <div className="light-the-night-content">
        <p className="light-the-night-paragraph">
        Phi Sigma Rho's national philanthropy is the Leukemia & Lymphoma Society. Every fall, our chapter participates 
        in the East Bay Light the Night Walk to raise money to fund life saving treatments! Leukemia and lymphoma survivors 
        and supporters alike walk as a culmination for their fundraising efforts. In 2017, our chapter came in 3rd place for 
        raising the most amount of money!<br/>
        <br/>
        "There was an undeniable sense of solidarity that came from everyone's love going out for cancer patients as well as 
        scientific advancements can help improve the lives and families of those affected. I am proud that Phi Rho annually participates 
        in Light the Night and takes part for this very important cause." - Geeta Shankar (Theta)
        </p>
        <img src={lightthenight} alt="Light the Night Event" className="light-the-night-image" />
      </div>
    </div>
  );
};

export default LightTheNight;
