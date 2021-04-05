import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      title: 'Insight Exchange Network',
      desc: 'Join us for this conference showcasing innovation',
      location: 'Chicago, IL',
      day: 28,
      month: 'JAN'
    },
    {
      title: "Citywide Buyer's Retreat",
      desc: 'Find out how banks are responding to the changing future of interest...',
      location: 'The Wagner, New York',
      day: 12,
      month: 'FEB'
    },
    {
      title: 'Research Exchange',
      desc: 'Find the best online resources to help with your investments...',
      location: 'London, England',
      day: 6,
      month: 'MAY'
    },
  ]

  return (
    <div className="events">
      <div className="upcoming-events">
        <h1><span>Upcoming</span> Events</h1>
        <h5 className="events-desc-mobile">At ACME, we're dedicated to learning, connecting and exploring opportunities</h5>
        <h5 className="events-desc-desktop">This needs a great tagline, but I'll fill it in later</h5>
      </div>

      <div className="event-cards-container">
        {events.map(event => (
          <div className="event-card">
            <div className="event-card-date">
              <span className="date-month">{event.month}</span>
              <span className="date-day">{event.day}</span>
            </div>
            <h1>{event.title}</h1>
            <p>{event.desc}</p>
            <a href="/">View Event Details</a>
            <div className="event-card-footer">
              <p>{event.location}</p>
            </div>
          </div>
        ))}

      </div>
      <div className="events-logo">
        <img
          src={process.env.PUBLIC_URL + '/img/logo.png'}
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Events;