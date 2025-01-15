import React from 'react';
import './Involvement.css';


import companylogo1 from '../../assets/CompanyLogos/companylogo1.png';
import companylogo2 from '../../assets/CompanyLogos/companylogo2.png';
import companylogo3 from '../../assets/CompanyLogos/companylogo3.png';
import companylogo4 from '../../assets/CompanyLogos/companylogo4.png';
import companylogo5 from '../../assets/CompanyLogos/companylogo5.png';
import companylogo6 from '../../assets/CompanyLogos/companylogo6.png';
import companylogo7 from '../../assets/CompanyLogos/companylogo7.png';
import companylogo8 from '../../assets/CompanyLogos/companylogo8.png';
import companylogo9 from '../../assets/CompanyLogos/companylogo9.png';
import companylogo10 from '../../assets/CompanyLogos/companylogo10.png';
import companylogo11 from '../../assets/CompanyLogos/companylogo11.png';
import companylogo12 from '../../assets/CompanyLogos/companylogo12.png';
import companylogo13 from '../../assets/CompanyLogos/companylogo13.png';
import companylogo14 from '../../assets/CompanyLogos/companylogo14.png';
import companylogo15 from '../../assets/CompanyLogos/companylogo15.png';
import companylogo16 from '../../assets/CompanyLogos/companylogo16.png';
import companylogo17 from '../../assets/CompanyLogos/companylogo17.png'; //there is no 18 LOL
import companylogo19 from '../../assets/CompanyLogos/companylogo19.png';
import companylogo20 from '../../assets/CompanyLogos/companylogo20.png';
import companylogo21 from '../../assets/CompanyLogos/companylogo21.png';
import companylogo22 from '../../assets/CompanyLogos/companylogo22.png';
import companylogo23 from '../../assets/CompanyLogos/companylogo23.png';
import companylogo24 from '../../assets/CompanyLogos/companylogo24.png';

const Involvement = () => {
  return (
    <div className="involvement-container">
      <h1 className="involvement-header">Involvement</h1>
      <p className="involvement-paragraph">
      Women at Phi Sigma Rho are heavily involved in extracurriculars beyond the sorority. 
       We value well rounded individuals and encourage one another to try new clubs or activities. 
       While growing to become our best selves, here are some groups our sisters are leaders and members of. 
      </p>
      <h2 className="professional-experience-header">Professional Experience</h2>
      <div className="company-logos">
        <img src={companylogo1} alt="Company Logo 1" className="company-logo-1" />
        <img src={companylogo2} alt="Company Logo 2" className="company-logo-2" />
        <img src={companylogo3} alt="Company Logo 3" className="company-logo-3" />
        <img src={companylogo4} alt="Company Logo 4" className="company-logo-4" />
        <img src={companylogo5} alt="Company Logo 5" className="company-logo-5" />
        <img src={companylogo6} alt="Company Logo 6" className="company-logo-6" />
        <img src={companylogo7} alt="Company Logo 7" className="company-logo-7" />
        <img src={companylogo8} alt="Company Logo 8" className="company-logo-8" />
        <img src={companylogo9} alt="Company Logo 9" className="company-logo-9" />
        <img src={companylogo10} alt="Company Logo 10" className="company-logo-10" />
        <img src={companylogo11} alt="Company Logo 11" className="company-logo-11" />
        <img src={companylogo12} alt="Company Logo 12" className="company-logo-12" />
        <img src={companylogo13} alt="Company Logo 13" className="company-logo-13" />
        <img src={companylogo14} alt="Company Logo 14" className="company-logo-14" />
        <img src={companylogo15} alt="Company Logo 15" className="company-logo-15" />
        <img src={companylogo16} alt="Company Logo 16" className="company-logo-16" />
        <img src={companylogo17} alt="Company Logo 17" className="company-logo-17" />
        <img src={companylogo19} alt="Company Logo 19" className="company-logo-19" />
        <img src={companylogo20} alt="Company Logo 20" className="company-logo-20" />
        <img src={companylogo21} alt="Company Logo 21" className="company-logo-21" />
        <img src={companylogo22} alt="Company Logo 22" className="company-logo-22" />
        <img src={companylogo23} alt="Company Logo 23" className="company-logo-23" />
        <img src={companylogo24} alt="Company Logo 24" className="company-logo-24" />
      </div>
      <h2 className="clubs-header">Clubs at Cal</h2>
      <div className="clubs-container">
        <div className="clubs-column">
          <ul>
            <li>BERCU</li>
            <li>Blueprint</li>
            <li>Beacon</li>
            <li>Big Data at Berkeley</li>
            <li>CalStar</li>
          </ul>
        </div>
        <div className="clubs-column">
          <ul>
            <li>CalSolar</li>
            <li>Codebase</li>
            <li>Codeology</li>
            <li>Cal Construction</li>
            <li>CS Kickstart</li>
          </ul>
        </div>
        <div className="clubs-column">
          <ul>
            <li>Hyperloop</li>
            <li>Lawrence Berkeley National Laboratory</li>
            <li>MV Code Club</li>
            <li>Space Technologies at Cal (STAC)</li>
            <li>Steel Bridge </li>
          </ul>
        </div>
      </div>
      </div>
  );
};

export default Involvement;
