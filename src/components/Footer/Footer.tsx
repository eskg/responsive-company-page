import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer-mobile">
        <div className="privacy-policy-container">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
        </div>
        <div className="nav-footer">
          <p className="site-links">Site Links</p>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Insights</a>
          <a href="/">Events</a>
          <a href="/">Due Dilligence</a>
          <a href="/">Contact Us</a>
        </div>
      </footer>

      <footer className="footer-desktop">
        <p>Call us at <a href="tel:111222333">111-222-3333</a><br />for more information</p>
        <div className="social-share">
          <span>Social Share</span>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><TwitterIcon /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FacebookIcon /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          <a href="https://gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
        </div>
      </footer>

    </>
  )
}

export default Footer;
