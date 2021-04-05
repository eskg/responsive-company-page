import React from 'react';
import './Banner.css';

const Banner = () => (
  <div
    className="banner-mobile"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/banner.png)` }}
  >
    <p>Research Professional Platform</p>
    <p className="acme">ACME Wealth</p>
    <h1>Management</h1>
    <h1>Platforms</h1>
    {[...Array(17).keys()].map(key => (<span>.</span>))}
    <p className="investment">Investment excellence.</p>
    <p>Dversity of thought</p>
    <p>Organizational strength.</p>
  </div>
)

export default Banner;