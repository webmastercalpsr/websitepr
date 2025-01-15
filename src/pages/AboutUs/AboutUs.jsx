import React from 'react';
import './AboutUs.css';
import aboutus1 from '../../assets/AboutUs/aboutus1.png';
import aboutus2 from '../../assets/AboutUs/aboutus2.png';
import aboutus3 from '../../assets/AboutUs/aboutus3.png';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-header">About Us</h1>
      
      <div className="aboutus-row aboutus-row-1">
        <div className="aboutus-text aboutus-text-1">
          <h2 className="aboutus-subheader">Phi Sigma Rho</h2>
          <p>Phi Sigma Rho was founded at Purdue University in 1984 by 2 women in engineering. 
            Due to the demands of their rigorous academic programs, Abby McDonald and Rashmi Khana 
            created the first social sorority for women in engineering and technology. Phi Sigma
            Rho currently has 44 collegiate chapters. ​</p>
        </div>
        <div className="aboutus-image aboutus-image-1">
          <img src={aboutus1} alt="About Phi Sigma Rho" />
        </div>
      </div>

      <div className="aboutus-row aboutus-row-2">
        <div className="aboutus-image aboutus-image-2">
          <img src={aboutus2} alt="Our History" />
        </div>
        <div className="aboutus-text aboutus-text-2">
          <h2 className="aboutus-subheader">Our History</h2>
          <p>The Alpha Chapter of Phi Sigma Rho was established at Purdue University by Abby McDonald 
            and Rashmi Khanna in 1984. Due to the demands of their rigorous academic programs, Abby 
            and Rashmi were unable to participate in traditional sorority recruitment. Thus, they 
            sought out to create the first social sorority for women in engineering and technology 
            that would be flexible enough to accommodate for their busy schedules. Since its inception, 
            Phi Sigma Rho has grown in membership with 46 active chapters.<br/><br/>
            The UC Berkeley chapter otherwise known as the Alpha Theta Chapter was founded in 2015 by 
            Annie Cheng, Rachel Zhang, and Anusha Jain. Our chapter continues to strengthen Science 
            Technology, Engineering and Math (STEM) through sisterhood and service to our Cal community.</p>
        </div>
      </div>

      <div className="aboutus-row aboutus-row-3">
        <div className="aboutus-text aboutus-text-3">
          <h2 className="aboutus-subheader">Our Values</h2>
          <p>Phi Sigma Rho was founded upon three values that we hold true to our sorority: friendship, 
            scholarship, and encouragement.<br/><br/>
            Our sisterhood cultivates friendship, creating a network of sisters who mentor us and enrich 
            our lives through their unique backgrounds and experiences. Our rituals help us connect with
            our rich alumni network and other sisters across the various chapters and strengthen our 
            sisterhood even beyond college. To help our sisters succeed in historically male-dominated 
            fields, Phi Rho focuses on providing professional development, assistance, and encouragement 
            to help them achieve their academic and career goals. Our sisters inspire each other in all 
            aspects of life and provide constant support and encouragement to get each other through both 
            their challenges and victories. All in all, we are driven by our commitment to promote shared 
            experiences, academic achievement, and service above self.</p>
        </div>
        <div className="aboutus-image aboutus-image-3">
          <img src={aboutus3} alt="Our Values" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
