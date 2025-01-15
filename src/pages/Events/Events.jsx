import React from 'react';
import './Events.css';

import events1 from '../../assets/Events/events1.png';
import events2 from '../../assets/Events/events2.png';

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="events-header">Events</h1>

      <div className="external-events-section">
        <div className="external-text-section">
        <h2 className="events-subheader">External Events</h2>
        <p className="events-paragraph">
          Phi Sigma Rho sisters participate in various external events that foster connections with the larger community. These events include collaborations with other organizations, social outings, and volunteer opportunities that help us grow as individuals and as a sisterhood.
        </p>
        </div>
        <img src={events1} alt="event1" className="events1" />
      </div>

      <div className="internal-events-section">
        <img src={events2} alt="event2" className="events2" />
        <div className="internal-text">
          <h2 className="events-subheader">Internal Events</h2>
          <p className="events-paragraph">
            Our internal events are designed to strengthen the bonds between sisters. From study sessions to movie nights and retreats, these events are all about building lasting relationships and creating cherished memories within our sisterhood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
