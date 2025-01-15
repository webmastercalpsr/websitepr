import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <p className="contact">
        You can contact us at <a href="mailto:calphirho@gmail.com">calphirho@gmail.com</a> or message us on Instagram <a href="https://www.instagram.com/calphirho/" target="_blank" rel="noopener noreferrer">@calphirho</a>.
      </p>
    </div>
  );
};

export default Contact;

//we dont have money for a backend rn so we can just somehow do links to the instgram and emails and add cute pictures. 


/*import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log('Message Sent', result.text);
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage('');
          // Clear form data if needed
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
      }, (error) => {
          console.log('Message Error', error.text);
          setErrorMessage('There was an error sending your message. Please try again.');
          setSuccessMessage('');
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-submit">Submit</button>

        {successMessage && <p className="contact-success">{successMessage}</p>}
        {errorMessage && <p className="contact-error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;*/
