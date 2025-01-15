import React from 'react';
import './Home.css';
import presidents from '../../assets/presidents.png';
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
        <p className='letter-text'>life's sweeter with phi rho</p>
        <a href="#fall2024" className='learn-more-button'>learn more</a>
        <div className='letter-content'>
          <div className='letter'>
            <p>Hi! We are Anvi Emani and Nicole Parker and we are so excited to be the Co-Presidents of 
                the Alpha Theta chapter of Phi Sigma Rho this year!<br/>
                <br/>
                “I joined Phi Rho during my freshman fall and it has by far been the best decision I made 
                in college. Coming from Massachusetts, one of my biggest problems coming into college was 
                finding a community at Berkeley that would feel like home. At my first coffee chat, the active 
                I was paired with (who later became my big) took three hours out of her schedule to help me 
                map out my four years at Berkeley, listen to my difficulties, and offer advice; immediately, 
                I knew this would be the community for me. <br/>
                <br/>
                When I look back at college down the road, many of my memories will be the ones I made with my
                 Phi Rho sisters. I’ve made lifelong friends to study with, go to concerts with, road trip with, 
                 and simply just exist with. I have never been part of such a supportive, ambitious, and kind 
                 group of girls, and many of the relationships I have made here have taught me what friendship is.
                  Simply put, I could not imagine my life without Phi Rho.” - Anvi<br/>
                  <br/>
                  “I joined Phi Rho my freshman fall and I don’t think my college experience would have been the 
                  same without this wonderful community. Phi Rho has been my rock at Berkeley, helping me through 
                  the challenges of college since my freshman year. This incredible community not only made my 
                  transition smoother but also became the source of lifelong friendships and academic inspiration.
                   My Phi Rho family has exceeded all my expectations, offering the support I had hoped for and
                    more. I can’t imagine my college journey without them. Filled with amazing women who make every
                     day brighter with their kindness, motivation and accomplishments, Phi Rho is truly special. 
                     I’m looking forward to an awesome year packed with fun, unforgettable moments and lots of 
                     sisterly love!” - Nicole<br/>
                <br/>
                We both couldn’t be more excited for recruitment and hope to see you there! In the meantime, 
                please continue to explore our website, and feel free to reach out to us if you want to talk or 
                have any questions! You can reach us at calphirho@gmail.com.<br/> 
                <br/>
                Phi Rho Love,<br/> 
                <br/> 
                Anvi & Nicole    
            </p>
          </div>
          <img src={presidents} alt="Presidents" className='presidents-image' />
        </div>
      </div>
    </div>
  );
};

export default Home;
