import React from 'react';
import './FAQs.css';

import faq1 from '../../assets/FAQ/faq1.png';
import faq2 from '../../assets/FAQ/faq2.png';
import faq3 from '../../assets/FAQ/faq3.png';
import faq4 from '../../assets/FAQ/faq4.png';

const FAQs = () => {
  return (
    <div className="faqs-container">
      <h1 className="faqs-header">Frequently Asked Questions</h1>
      <div className="faqs-content">
        <div className="faqs-text">
          <h2 className="faqs-subheader">What is a social sorority?</h2>
          <p className="faqs-paragraph">
            A social sorority is a group of women who come together to form a sisterhood based on shared values and interests. 
            Social sororities often focus on building strong bonds between members, participating in social events, and contributing to the community.
          </p>
          <h2 className="faqs-subheader">Why Phi Sigma Rho?</h2>
          <p className="faqs-paragraph">
            Phi Sigma Rho is a unique sorority that values both academic achievement and personal growth. 
            We offer a supportive sisterhood while encouraging leadership, involvement, and professional development.
          </p>
          <h2 className="faqs-subheader">What is the time commitment?</h2>
          <p className="faqs-paragraph">
            The time commitment for Phi Sigma Rho can vary, but generally includes weekly meetings, participation in events, and involvement in committees. 
            We strive to balance sorority responsibilities with academic and personal life.
          </p>
        </div>
        <div className="faqs-images">
          <img src={faq1} alt="FAQ 1" className="faq-image" />
          <img src={faq2} alt="FAQ 2" className="faq-image" />
          <img src={faq3} alt="FAQ 3" className="faq-image" />
          <img src={faq4} alt="FAQ 4" className="faq-image" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
