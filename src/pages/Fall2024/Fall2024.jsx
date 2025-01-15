import React from 'react';
import './Fall2024.css';


import flyerfa24 from '../../assets/Fall2024/flyerfa2024.png';
import claire from '../../assets/Fall2024/claire.png';
import paulina from '../../assets/Fall2024/paulina.png';

const Fall2024 = () => {
  return (
    <div className="fall2024-container">
      <div className="buttons-container">
        <a href="https://airtable.com/appNDYBntyLzK92Bx/shrXn7YKkmoJGNPZm" className="recruitment-button">Interest Form</a>
        <a href="https://airtable.com/appNDYBntyLzK92Bx/shrrOfEfK0330vTDP" className="recruitment-button">Request a Coffee Chat!</a>
        <a href="https://calphirho.notion.site/Phi-Sigma-Rho-Fall-24-Recruitment-4544cce6cc90444cb636ffac1b5ab829" className="recruitment-button">Recruitment Timeline</a>
        <a href="https://link4.com" className="recruitment-button">Accepted Majors</a>
      </div>
      <div className="content-container">
        <img src={flyerfa24} alt="flyerfa24" className="flyerfa24" />
        <div className="letter-container">
          <h2 className="letter-header">DEAR POTENTIAL NEW MEMBERS,</h2>
          <p className="letter-paragraph">
          Hi there! <br/>
          <br/>
          We're Paulina Separa and Claire Bogen, and we're thrilled to serve as your Recruitment Chairs this Fall. 
          We hope you'll come to love this incredible community of women as much as we do!<br/>
          <br/>
          Having gone through recruitment ourselves, we understand how daunting it can seem at first. We're here 
          for each and every one of you, aiming to make this process as comfortable and exciting as possible. 
          Every sister of Phi Rho is eagerly anticipating meeting all members of this Fall’s recruiting class. 
          Our goal is to help you foster meaningful connections with us!<br/>
          <br/>
          We can't wait to meet you in person during the recruitment process! We promise it will be a fulfilling 
          experience of exploration and self-discovery. If you have any questions about recruitment or Phi Rho in
           general, please don't hesitate to reach out to us at recruitment.calpsr@gmail.com. Be sure to follow us
            on Instagram @calphirho for updates. <br/>
            <br/>
          Looking forward to connecting with you soon!<br/>
          <br/>
          Phi Rho Love, <br/>
          <br/>
          Paulina and Claire
          Recruitment Chairs
          </p>
          <img src={claire} alt="claire" className="claire" />
          <img src={paulina} alt="claire" className="paulina" />
        </div>
      </div>
    </div>
  );
};

export default Fall2024;
