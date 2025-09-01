import React from 'react';
import './Home.css';
import presidents from '../../assets/presidentsfa25.png';
import home1 from '../../assets/home1.png'
import sigmud from '../../assets/sigmud.png'

const Home = () => {
  return (
    <div className='home-page'>
      {/* Title Section */}
      <div className='title-section'>
      <div className='title-container'>
            <h1 className='title'>
            PHI<br />
            SIGMA<br />
            RHO
            </h1>
            <p className='sub-title'>Alpha Theta Chapter at UC Berkeley</p>
            <div className='sigmud'>
            <img src={sigmud} alt='Sigmud'/>
            </div>
            </div>
        <div className='home-image'>
          <img src={home1} alt='Home'/>
        </div>
      </div>

      {/* Wave Divider */}
      <div className='custom-shape-divider-bottom-1724185175'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className='shape-fill'></path>
        </svg>
      </div>

      {/* Letter Section */}
      <div className='letter-section'>
        <h2 className='letter-header'>Fall 2024 Recruitment</h2>
        <p className='letter-text'>phi rho is the cherry on top</p>
        <a href="fall2025" className='learn-more-button'>learn more</a>
        <div className='letter-content'>
          <div className='letter'>
            <p>Hi! We are Hailey Pham and Colleen Pangilinan and we are so excited to be the Co-Presidents of 
                the Alpha Theta chapter of Phi Sigma Rho this year!<br/>
                
                <br/>
                We both couldn’t be more excited for recruitment and hope to see you there! In the meantime, 
                please continue to explore our website, and feel free to reach out to us if you want to talk or 
                have any questions! You can reach us at calphirho@gmail.com.<br/> 
                <br/>
                Phi Rho Love,<br/> 
                <br/> 
                Hailey & Colleen  
            </p>
          </div>
          <img src={presidents} alt="Presidents" className='presidents-image' />
        </div>
      </div>
    </div>
  );
};

export default Home;
