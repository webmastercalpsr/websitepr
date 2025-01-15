import React from 'react';
import './BerkeleyProject.css';

import berkeleyproject from '../../assets/Philo/berkeleyproject.png';

const BerkeleyProject = () => {
  return (
    <div className="berkeley-project-container">
      <h1 className="berkeley-project-header">Berkeley Project</h1>
      <div className="berkeley-project-content">
        <p className="berkeley-project-paragraph">
          In the fall and spring, Phi Rho participates in Berkeley Project, a large-scale service project throughout
          different areas of Berkeley. In the past, we cleaned up John Muir Elementary School, removed invasive species 
          along Strawberry Creek, and landscaped Indian Rock Park. Every Berkeley Project Day, over 1,500 participants volunteer,
          and we are very grateful and lucky to be a part of such an amazing event!<br/>
          <br/>
          "Berkeley Project is my favorite event of the semester! We visit nearby parks on campus or in the neighboring 
          communities and clean up the environment. Being outdoors and gardening with my sisters is so rewarding, and I really 
          value the experience." -Jennifer Evans (Zeta)
        </p>
        <img src={berkeleyproject} alt="Berkeley Project" className="berkeley-project-img" />
      </div>
    </div>
  );
};

export default BerkeleyProject;
