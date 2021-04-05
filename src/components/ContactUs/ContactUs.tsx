import React from 'react';
import './ContactUs.css';

const ContactUs = () => (
  <div
    className="contact-us-container"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/cover-2.png)` }}
  >
    <h1>Our Commitment</h1>
    <h1>To Professionals</h1>
    <p>We help our partners deliver industry leading results with a 
      commitment to excellence, thought-provoking insights and 
      experienced distribution. We are laser focused on our shared 
      goal - helping clients achieve their objectives.
    </p>
    <a className="contact-us-link" href="/">Contact us</a>
  </div>
)

export default ContactUs;