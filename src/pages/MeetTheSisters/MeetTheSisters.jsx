import React from 'react';
import './MeetTheSisters.css';

import pi from '../../assets/Sisters/pi.png';
import omicron from '../../assets/Sisters/omicron.png';
import xi from '../../assets/Sisters/xi.png';
import nu from '../../assets/Sisters/nu.png';
import mu from '../../assets/Sisters/mu.png';
import lambda from '../../assets/Sisters/lambda.png';
import kappa from '../../assets/Sisters/kappa.png';
import iota from '../../assets/Sisters/iota.png';
import theta from '../../assets/Sisters/theta.png';
import eta from '../../assets/Sisters/eta.png';
import zeta from '../../assets/Sisters/zeta.png';
import epsilon from '../../assets/Sisters/epsilon.png';
import delta from '../../assets/Sisters/delta.png';

const MeetTheSisters = () => {
  const sisters = [
    { img: pi, name: 'Pi (Fall 2024)' },
    { img: omicron, name: 'Omicron (Spring 2024)' },
    { img: xi, name: 'Xi (Fall 2023)' },
    { img: nu, name: 'Nu (Spring 2023)' },
    { img: mu, name: 'Mu (Fall 2022)' },
    { img: lambda, name: 'Lambda (Fall 2021)' },
    { img: kappa, name: 'Kappa (Spring 2021)' },
    { img: iota, name: 'Iota (Fall 2020)' },
    { img: theta, name: 'Theta (Fall 2019)' },
    { img: eta, name: 'Eta (Fall 2018)' },
    { img: zeta, name: 'Zeta (Spring 2018)' },
    { img: epsilon, name: 'Epsilon (Fall 2017)' },
    { img: delta, name: 'Delta (Fall 2016)' },
  ];

  return (
    <div className="meet-the-sisters-container">
      <h1 className="meet-the-sisters-header">Meet the Sisters</h1>
      <div className="sisters-grid">
        {sisters.map((sister, index) => (
          <div key={index} className="sister-item">
            <img src={sister.img} alt={sister.name} />
            <p>{sister.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheSisters;