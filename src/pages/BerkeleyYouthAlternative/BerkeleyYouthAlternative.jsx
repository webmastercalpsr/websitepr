import React from 'react';
import './BerkeleyYouthAlternative.css';

import berkeleyYouthAlternative from '../../assets/Philo/berkeleyYouthAlternative.png';

const BerkeleyYouthAlternative = () => {
  return (
    <div className="berkeley-youth-alternative-container">
      <h1 className="berkeley-youth-alternative-header">Berkeley Youth Alternatives</h1>
      <div className="berkeley-youth-alternative-content">
        <p className="berkeley-youth-alternative-paragraph">
          Phi Sigma Rho is proud to partner with Berkeley Youth Alternative (BYA), an organization that provides programs 
          for youth and their families in the Berkeley area. Over the years, we have engaged in various service activities 
          that support BYA's mission of helping youth succeed academically, emotionally, and socially. Our sisters have 
          volunteered in tutoring, mentoring, and community service projects, making a positive impact on the lives of 
          many young individuals.<br/>
          <br/>
          "Working with BYA has been a deeply fulfilling experience. It's amazing to see the direct impact we can have 
          on these kids' lives, and it’s something I look forward to every semester." -Emily Wong (Gamma)
        </p>
        <img src={berkeleyYouthAlternative} alt="Berkeley Youth Alternative" className="berkeley-youth-alternative-img" />
      </div>
    </div>
  );
};

export default BerkeleyYouthAlternative;
