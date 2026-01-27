import React from 'react';
import './Spring2026.css';

import flyerfa25p1 from '../../assets/Fall2025/first_page.png'
import flyerfa25p2 from '../../assets/Fall2025/second_page.png'
import claire from '../../assets/Fall2025/claire.png';
import flyersp26 from '../../assets/Spring2026/spring26Flyer.png'
import sina from '../../assets/Spring2026/sina.png'

const Spring2026 = () => {
  return (
    <div className="spring2026-container">
      <div className="buttons-container">
        <a href="https://airtable.com/appriCQ3VihYzfgbq/pagHBKBLmQt88Q3oM/form" className="recruitment-button">Interest Form</a>
        <a href="https://airtable.com/appPzGeM1KqljJWA5/pagGDm61sHCEAtPF5/form" className="recruitment-button">Request a Coffee Chat!</a>
       <a href="https://complex-canid-726.notion.site/Phi-Sigma-Rho-Fall-25-Recruitment-2616cd4cd48380e194c0d4ca2a2e7102" className="recruitment-button">Recruitment Timeline</a>
        <a href="accepted-majors" className="recruitment-button">Accepted Majors</a>
      </div>
      <div className="content-container">
        {/* Left column: flyers stacked */}
        <div className="flyers-column">
          <img src={flyersp26} alt="Recruitment Flyer Page 1" className="flyer-img" />
          {/* <img src={flyerfa25p2} alt="Recruitment Flyer Page 2" className="flyer-img" /> */}
        </div>

        {/* Right column: letter + Claire photo */}
        <div className="letter-column">
          <div className="letter-container">
            <h2 className="letter-header">DEAR POTENTIAL NEW MEMBERS,</h2>
            <p className="letter-paragraph">
              Hi there! <br /><br />
              We're Sina and Natalee, and we're thrilled to serve as your Recruitment Chairs this Spring. 
              We hope you'll come to love this incredible community of women as much as we do!<br /><br />
              Having gone through recruitment ourself, we understand how daunting it can seem at first. We're here 
              for each and every one of you, aiming to make this process as comfortable and exciting as possible. 
              Every sister of Phi Rho is eagerly anticipating meeting all members of this Spring’s recruiting class. 
              Our goal is to help you foster meaningful connections with us!<br /><br />
              We can't wait to meet you in person during the recruitment process! We promise it will be a fulfilling 
              experience of exploration and self-discovery. If you have any questions about recruitment or Phi Rho in
              general, please don't hesitate to reach out to us at recruitment.calpsr@gmail.com. Be sure to follow us
              on Instagram @calphirho for updates. <br /><br />
              Looking forward to connecting with you soon!<br /><br />
              Phi Rho Love, <br /><br />
              Sina and Natalee <br />
              Recruitment Chairs
            </p>
          </div>
          <img src={sina} alt="Sina" className="sina" />
        </div>
      </div>
    </div>
  );
};

export default Spring2026;
